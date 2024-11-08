#include "websocketserver.h"
#include <QDebug>

WebSocketServer* WebSocketServer::instance = nullptr;

WebSocketServer* WebSocketServer::getInstance() {
    if (!instance) {
        instance = new WebSocketServer();
    }
    return instance;
}

WebSocketServer::WebSocketServer(QObject *parent)
    : QObject(parent)
    , m_server(new QWebSocketServer(QStringLiteral("PRPD Server"), 
                                  QWebSocketServer::NonSecureMode, 
                                  this))
{
}

WebSocketServer::~WebSocketServer() {
    stop();
}

bool WebSocketServer::start(quint16 port) {
    if (m_server->listen(QHostAddress::Any, port)) {
        qDebug() << "WebSocket server listening on port" << port;
        
        connect(m_server, &QWebSocketServer::newConnection,
                this, &WebSocketServer::handleNewConnection);
        
        return true;
    }
    
    qDebug() << "WebSocket server failed to start:" << m_server->errorString();
    return false;
}

void WebSocketServer::stop() {
    if (m_server->isListening()) {
        m_server->close();
    }
    qDeleteAll(m_clients);
    m_clients.clear();
}

void WebSocketServer::handleNewConnection() {
    QWebSocket *socket = m_server->nextPendingConnection();
    
    connect(socket, &QWebSocket::textMessageReceived,
            this, &WebSocketServer::processTextMessage);
    connect(socket, &QWebSocket::binaryMessageReceived,
            this, &WebSocketServer::processBinaryMessage);
    connect(socket, &QWebSocket::disconnected,
            this, &WebSocketServer::handleDisconnection);
    
    m_clients << socket;
    emit clientConnected();
    
    qDebug() << "New client connected. Total clients:" << m_clients.size();
}

void WebSocketServer::handleDisconnection() {
    QWebSocket *socket = qobject_cast<QWebSocket*>(sender());
    if (socket) {
        m_clients.removeAll(socket);
        socket->deleteLater();
        emit clientDisconnected();
        
        qDebug() << "Client disconnected. Remaining clients:" << m_clients.size();
    }
}

void WebSocketServer::processTextMessage(const QString& message) {
    emit messageReceived(message);
}

void WebSocketServer::processBinaryMessage(const QByteArray& message) {
    emit binaryMessageReceived(message);
}

void WebSocketServer::broadcastMessage(const QString& message) {
    for (QWebSocket *socket : m_clients) {
        socket->sendTextMessage(message);
    }
}

void WebSocketServer::broadcastBinary(const QByteArray& data) {
    for (QWebSocket *socket : m_clients) {
        socket->sendBinaryMessage(data);
    }
}

bool WebSocketServer::isRunning() const {
    return m_server->isListening();
} 