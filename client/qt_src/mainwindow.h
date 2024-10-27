#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QFrame>
#include <QMainWindow>
#include <QPushButton>
#include <QSplitter>
#include <QTextBrowser>
#include <QTextEdit>
#include <QWebEngineView>
#include "apirouter.h"
#include "devwindow.h"
#include "worker.h"

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

protected:
    void initUi();
    void initWebView();
    void initWorkerThread();
    void initDevToolWindow();

private slots:
    void on_sendBtn_clicked();
    void OnReceiveMessageFromJS(QString strParameter);
    void appendMessageToHistory(const QString &prefix, const QString &content);

private:
    QSplitter *mainSplitter;
    QFrame *webViewFrame;
    QSplitter *rightSplitter;
    QTextBrowser *msgBrowser;
    QTextEdit *sendEdit;
    QPushButton *sendBtn;


    QWebEngineView *webView;
    DevWindow *devWindow = NULL;
    ApiRouter *apiRouter;
    Worker *worker;
    QThread *threadWorker;
    QWebChannel *channel;
};

#endif // MAINWINDOW_H
