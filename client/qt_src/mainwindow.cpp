#include "mainwindow.h"
#include <QMenu>
#include <QMessageBox>
#include <QNetworkProxyFactory>
#include <QPushButton>
#include <QSplitter>
#include <QStackedLayout>
#include <QTextBrowser>
#include <QThread>
#include <QWebEngineProfile>
#include <QtWebChannel>

MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent) {
    qputenv("QTWEBENGINE_REMOTE_DEBUGGING", "9223");

    // 创建 webView
    webView = new QWebEngineView(this);

    // 初始化 UI
    initUi();
    // 初始化 Worker 线程
    initWorkerThread();
    // // 初始化 WebView
    initWebView();
    // 初始化 DevTool 窗口
    initDevToolWindow();

    // 设置初始大小
    resize(800, 600);
}

MainWindow::~MainWindow() {
    // QObject 的子对象会自动删除，所以这里不需要显式删除
    if (threadWorker->isRunning()) {
        threadWorker->quit();
    }
    threadWorker->wait();
}

void MainWindow::initUi() {
    // 设置主窗口的最小尺寸
    setMinimumSize(800, 600);
    // 创建主视图
    QWidget *mainView = new QWidget(this);
    setCentralWidget(mainView);

    // 创建主布局
    QVBoxLayout *mainLayout = new QVBoxLayout(mainView);
    mainLayout->setContentsMargins(0, 0, 0, 0);
    mainLayout->setSpacing(0);

    // 创建主内容分割器
    mainSplitter = new QSplitter(Qt::Horizontal, mainView);
    mainLayout->addWidget(mainSplitter);

    // 创建 webView 框架
    webViewFrame = new QFrame(mainSplitter);
    webViewFrame->setFrameShape(QFrame::StyledPanel);
    webViewFrame->setFrameShadow(QFrame::Raised);

    // 创建 webView 布局
    QVBoxLayout *webViewLayout = new QVBoxLayout(webViewFrame);
    webViewLayout->setContentsMargins(0, 0, 0, 0);
    webViewLayout->addWidget(webView);

    // 创建右侧垂直分割器
    rightSplitter = new QSplitter(Qt::Vertical, mainSplitter);

    // 创建消息浏览器
    msgBrowser = new QTextBrowser(rightSplitter);

    // 创建发送编辑框
    sendEdit = new QTextEdit(rightSplitter);

    // 创建发送按钮
    sendBtn = new QPushButton("发送", rightSplitter);
    connect(sendBtn, &QPushButton::clicked, this, &MainWindow::on_sendBtn_clicked);

    // 设置分割器的初始大小
    QList<int> sizes;
    sizes << 200 << 400; // 左侧 webView 200px，右侧 400px
    mainSplitter->setSizes(sizes);

    sizes.clear();
    sizes << 300 << 100 << 30; // 消息浏览器 300px，发送编辑框 100px，发送按钮 30px
    rightSplitter->setSizes(sizes);
}

void MainWindow::initWebView() {
    channel = new QWebChannel(this);
    // 修改消息处理连接
    connect(apiRouter, &ApiRouter::messageFromServer, this, &MainWindow::OnReceiveMessageFromJS);
    connect(apiRouter, &ApiRouter::responseFromServer, this,
            [this](const QString &response) { qDebug() << "Response from server:" << response; });
    channel->registerObject("bridge", apiRouter); // 添加这行
    webView->page()->setWebChannel(channel);
    // 添加初始化脚本
    const QString initScript = R"(
        console.log('Checking Qt WebChannel...');
        if (typeof QWebChannel === 'undefined') {
            console.error('QWebChannel not found');
        }

        // 等待 qt 对象就绪
        const waitForQt = () => {
            if (window.qt) {
                console.log('Qt object ready');
                return;
            }
            console.log('Waiting for Qt object...');
            setTimeout(waitForQt, 100);
        };
        waitForQt();
    )";

    // 在页面加载完成后执行初始化脚本
    connect(webView->page(), &QWebEnginePage::loadFinished, this, [=](bool ok) {
        if (ok) {
            webView->page()->runJavaScript(initScript);
            qDebug() << "WebChannel initialization script injected";
            msgBrowser->append("Web页面加载完成");
        } else {
            qDebug() << "Page load failed";
            msgBrowser->append("Web页面加载失败");
        }
    });
    // webView->load(QUrl("qrc:///dist/index.html#/"));
    webView->load(QUrl("http://localhost:5173"));
}

void MainWindow::initWorkerThread() {
    threadWorker = new QThread();
    worker = new Worker();
    worker->moveToThread(threadWorker);
    apiRouter = new ApiRouter(worker);
    connect(threadWorker, &QThread::finished, threadWorker, &QObject::deleteLater);
    connect(threadWorker, &QThread::finished, worker, &QObject::deleteLater);
    connect(threadWorker, &QThread::started, worker, &Worker::doTask);
    threadWorker->start();
}


void MainWindow::initDevToolWindow() {
    webView->setContextMenuPolicy(Qt::CustomContextMenu);

    connect(webView, &QWidget::customContextMenuRequested, this, [this]() {
        QMenu *menu = new QMenu(this);
        QAction *devTool = menu->addAction("Dev Tools");
        connect(devTool, &QAction::triggered, this, [this]() {
            if (devWindow == NULL) {
                devWindow = new DevWindow();
                devWindow->show();
            } else {
                devWindow->show();
            }
        });

        QAction *pageRefresh = menu->addAction("Refresh");
        connect(pageRefresh, &QAction::triggered, this,
                [this]() { webView->page()->triggerAction(QWebEnginePage::Reload); });

        QAction *routeBack = menu->addAction("Back");
        connect(routeBack, &QAction::triggered, this,
                [this]() { webView->page()->triggerAction(QWebEnginePage::Back); });

        QAction *routeForward = menu->addAction("Previous");
        connect(routeForward, &QAction::triggered, this,
                [this]() { webView->page()->triggerAction(QWebEnginePage::Forward); });

        menu->exec(QCursor::pos());
    });
}


void MainWindow::on_sendBtn_clicked() {
    QString content = sendEdit->toPlainText().trimmed();
    if (content.isEmpty()) {
        QMessageBox::warning(this, "提示", "请输入消息内容");
        return;
    }

    // 构造消息对象
    QJsonObject message;
    message["action"] = "qt-message";
    message["data"] = content;
    // 发送消息
    if (apiRouter) {
        apiRouter->sendMsgToClient(QJsonDocument(message).toJson(QJsonDocument::Compact));
        sendEdit->clear();
    }
}

void MainWindow::OnReceiveMessageFromJS(QString strParameter) {
    try {
        QJsonDocument doc = QJsonDocument::fromJson(strParameter.toUtf8());
        if (doc.isObject()) {
            QJsonObject obj = doc.object();
            QString content;

            if (obj["action"].toString() == "web-message") {
                content = obj["data"].toString();
                appendMessageToHistory("Web", content);
            } else if (obj["action"].toString() == "qt-message") {
                qDebug() << "Processing message from Qt:" << obj;
                content = obj["data"].toString();
                appendMessageToHistory("Qt", content);
            }
        }
    }
    catch (...) {
        qDebug() << "Failed to parse message from JS:" << strParameter;
    }
}


void MainWindow::appendMessageToHistory(const QString &prefix, const QString &content) {
    QString time = QDateTime::currentDateTime().toString("yyyy-MM-dd HH:mm:ss");
    QString formattedMessage = QString("[%1] %2: %3").arg(time).arg(prefix).arg(content);
    msgBrowser->append(formattedMessage);
}