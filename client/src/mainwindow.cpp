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

    // 初始化 WebSocket
    initWebSocket();
    // 初始化 DevTool 窗口
    initDevToolWindow();

    // 设置初始大小
    resize(1000, 650);
}

MainWindow::~MainWindow() {
    if (worker) {
        worker->stop();
    }
    if (dataTimer && dataTimer->isActive()) {
        dataTimer->stop();
    }
    if (devWindow) {
        devWindow->close();
        delete devWindow;
    }
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

    QHBoxLayout *sendBtnLayout = new QHBoxLayout(rightSplitter);
    // 创建发送按钮
    webChannelSendBtn = new QPushButton("Channel发送");
    wsSendBtn = new QPushButton("WebSocket发送");

    sendBtnLayout->addWidget(webChannelSendBtn);
    sendBtnLayout->addWidget(wsSendBtn);

    connect(webChannelSendBtn, &QPushButton::clicked, this, [this]() { sendMessage(MessageType::WebChannel); });
    connect(wsSendBtn, &QPushButton::clicked, this, [this]() { sendMessage(MessageType::WebSocket); });

    // 添加数据生成控制按钮
    QHBoxLayout *controlLayout = new QHBoxLayout();
    startBtn = new QPushButton("开始 JSON 数据", this);
    stopBtn = new QPushButton("停止生成", this);
    startBinaryBtn = new QPushButton("开始二进制数据", this); // 新增
    stopBtn->setEnabled(false);
    startBinaryBtn->setEnabled(true); // 新增

    controlLayout->addWidget(startBtn);
    controlLayout->addWidget(startBinaryBtn); // 新增
    controlLayout->addWidget(stopBtn);

    // 将控制按钮添加到右侧分割器
    QWidget *controlWidget = new QWidget(rightSplitter);
    controlWidget->setLayout(controlLayout);

    // 更新分割器大小设置
    QList<int> sizes;
    sizes << 700 << 300; // 左侧 webView 200px，右侧 400px
    mainSplitter->setSizes(sizes);

    sizes.clear();
    sizes << 300 << 100 << 30 << 40; // 消息浏览器、发送编辑框、发送按钮、控制按钮
    rightSplitter->setSizes(sizes);

    // 连接信号槽
    connect(startBtn, &QPushButton::clicked, this, &MainWindow::startJsonDataGeneration);
    connect(startBinaryBtn, &QPushButton::clicked, this, &MainWindow::startBinaryDataGeneration);
    connect(stopBtn, &QPushButton::clicked, this, &MainWindow::stopDataGeneration);
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

    // 初始化 PRPD 生成器和定时器
    prpdGenerator = new PRPDGenerator();
    dataTimer = new QTimer(this);
    connect(dataTimer, &QTimer::timeout, this, &MainWindow::generateAndSendData);
}


void MainWindow::initWebSocket() {
    // 启动 WebSocket 服务器
    auto wsServer = WebSocketServer::getInstance();
    if (wsServer->start(1086)) {
        qDebug() << "WebSocket server started successfully";

        // 监听客户端连接
        connect(wsServer, &WebSocketServer::clientConnected, this,
                [this]() { appendMessageToHistory("System", "WebSocket client connected"); });

        connect(wsServer, &WebSocketServer::clientDisconnected, this,
                [this]() { appendMessageToHistory("System", "WebSocket client disconnected"); });

        // 处理接收到的消息
        connect(wsServer, &WebSocketServer::messageReceived, this,
                [this](const QString &msg) { appendMessageToHistory("Web (WebSocket)", msg); });
    } else {
        qDebug() << "Failed to start WebSocket server";
    }
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

void MainWindow::sendMessage(MessageType type) {
    QString content = sendEdit->toPlainText().trimmed();
    if (content.isEmpty()) {
        QMessageBox::warning(this, "提示", "请输入消息内容");
        return;
    }

    if (type == MessageType::WebChannel) {
        // 构造消息对象
        QJsonObject message;
        message["action"] = "qt-message";
        message["data"] = content;
        // 发送消息
        if (apiRouter) {
            apiRouter->sendMsgToClient(QJsonDocument(message).toJson(QJsonDocument::Compact));
            // appendMessageToHistory("Qt(WebChannel)", content);
        }
    } else {
        // WebSocket 消息
        QJsonObject message;
        message["action"] = "qt-message";
        message["type"] = "websocket";
        message["data"] = content;
        auto wsServer = WebSocketServer::getInstance();
        wsServer->broadcastMessage(QJsonDocument(message).toJson(QJsonDocument::Compact));
        appendMessageToHistory("Qt(WebSocket)", content);
    }
    sendEdit->clear();
}


void MainWindow::OnReceiveMessageFromJS(QString strParameter) {
    try {
        QJsonDocument doc = QJsonDocument::fromJson(strParameter.toUtf8());
        if (doc.isObject()) {
            QJsonObject obj = doc.object();
            QString content = obj["data"].toString();
            QString type = obj["type"].toString();

            if (obj["action"].toString() == "web-message") {
                QString prefix = type == "websocket" ? "Web(WebSocket)" : "Web(WebChannel)";
                appendMessageToHistory(prefix, content);
            } else if (obj["action"].toString() == "qt-message") {
                QString prefix = type == "websocket" ? "Qt(WebSocket)" : "Qt(WebChannel)";
                appendMessageToHistory(prefix, content);
            }
        }
    } catch (...) {
        qDebug() << "Failed to parse message from JS:" << strParameter;
    }
}


void MainWindow::appendMessageToHistory(const QString &prefix, const QString &content) {
    QString time = QDateTime::currentDateTime().toString("yyyy-MM-dd HH:mm:ss");
    QString formattedMessage = QString("[%1] %2: %3").arg(time).arg(prefix).arg(content);
    msgBrowser->append(formattedMessage);
}

void MainWindow::startJsonDataGeneration() {
    if (!dataTimer->isActive()) {
        currentDataMode = DataMode::JSON;
        dataTimer->start(33); // 约30fps
        startBtn->setEnabled(false);
        startBinaryBtn->setEnabled(false);
        stopBtn->setEnabled(true);
        msgBrowser->append("开始生成 JSON 格式 PRPD 数据...");
    }
}

void MainWindow::startBinaryDataGeneration() {
    if (!dataTimer->isActive()) {
        currentDataMode = DataMode::Binary;
        dataTimer->start(33); // 约30fps
        startBtn->setEnabled(false);
        startBinaryBtn->setEnabled(false);
        stopBtn->setEnabled(true);
        msgBrowser->append("开始生成二进制格式 PRPD 数据...");
    }
}

void MainWindow::stopDataGeneration() {
    if (dataTimer->isActive()) {
        dataTimer->stop();
        startBtn->setEnabled(true);
        startBinaryBtn->setEnabled(true);
        stopBtn->setEnabled(false);
        msgBrowser->append("停止生成 PRPD 数据");
    }
}

void MainWindow::generateAndSendData() {
    if (!prpdGenerator || !apiRouter)
        return;

    switch (currentDataMode) {
        case DataMode::JSON: {
            QJsonObject data = prpdGenerator->generateFrame();
            QJsonObject message;
            message["action"] = "prpd-data";
            message["data"] = data;
            message["mode"] = "json";  // 添加模式标识
            apiRouter->sendMsgToClient(QJsonDocument(message).toJson(QJsonDocument::Compact));
            break;
        }
        case DataMode::Binary: {
            QByteArray binaryData = prpdGenerator->generateBinaryFrame();
            apiRouter->sendBinaryData(binaryData);
            break;
        }
    }
}
