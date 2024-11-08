#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QFrame>
#include <QMainWindow>
#include <QPushButton>
#include <QSplitter>
#include <QTextBrowser>
#include <QTextEdit>
#include <QWebEngineView>
#include "devwindow.h"
#include "webData/prpd_generator.h"
#include "webchannel/apirouter.h"
#include "websocket/websocketserver.h"

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow() override;

private:
    QSplitter *mainSplitter;
    QFrame *webViewFrame;
    QSplitter *rightSplitter;
    QTextBrowser *msgBrowser;
    QTextEdit *sendEdit;
    QPushButton *webChannelSendBtn;
    QPushButton *wsSendBtn;


    QWebEngineView *webView;
    DevWindow *devWindow = NULL;
    WebSocketServer *ws;
    ApiRouter *apiRouter;
    Worker *worker;
    QThread *threadWorker;
    QWebChannel *channel;


    PRPDGenerator *prpdGenerator = nullptr;
    QTimer *dataTimer = nullptr;
    QPushButton *startBtn;
    QPushButton *stopBtn;

    QPushButton *startBinaryBtn;

    enum class MessageType { WebChannel, WebSocket };
    enum class DataMode { JSON, Binary };
    DataMode currentDataMode = DataMode::JSON;

protected:
    void initUi();
    void initWebView();
    void initWorkerThread();
    void initWebSocket();
    void initDevToolWindow();

private slots:
    void sendMessage(MessageType type);
    void OnReceiveMessageFromJS(QString strParameter);
    void appendMessageToHistory(const QString &prefix, const QString &content);

    void startJsonDataGeneration();
    void startBinaryDataGeneration();
    void stopDataGeneration();
    void generateAndSendData();
};

#endif // MAINWINDOW_H
