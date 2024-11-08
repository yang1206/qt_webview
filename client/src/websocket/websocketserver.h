#ifndef WEBSOCKETSERVER_H
#define WEBSOCKETSERVER_H

#include <QObject>
#include <QWebSocketServer>
#include <QWebSocket>
#include <QList>

class WebSocketServer : public QObject {
    Q_OBJECT
public:
    static WebSocketServer* getInstance();
    
    bool start(quint16 port = 8080);
    void stop();
    void broadcastMessage(const QString& message);
    void broadcastBinary(const QByteArray& data);
    bool isRunning() const;

signals:
    void clientConnected();
    void clientDisconnected();
    void messageReceived(const QString& message);
    void binaryMessageReceived(const QByteArray& data);

private slots:
    void handleNewConnection();
    void handleDisconnection();
    void processTextMessage(const QString& message);
    void processBinaryMessage(const QByteArray& message);

private:
    explicit WebSocketServer(QObject *parent = nullptr);
    ~WebSocketServer();
    
    static WebSocketServer* instance;
    QWebSocketServer* m_server;
    QList<QWebSocket*> m_clients;
};

#endif // WEBSOCKETSERVER_H 