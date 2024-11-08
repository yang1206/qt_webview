//
// Created by Yang1206 on 2024/10/26.
//

#include "apirouter.h"
#include <QDebug>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonParseError>

ApiRouter::ApiRouter(Worker *worker) {
    m_worker = worker;
    connect(m_worker, &Worker::taskFinished, this, &ApiRouter::onTaskFinished);
}

void ApiRouter::requestFromClient(QString strParameter) {
    QJsonParseError json_error;
    QJsonDocument jsonDoc = QJsonDocument::fromJson(strParameter.toLocal8Bit().data(), &json_error);

    if (json_error.error != QJsonParseError::NoError) {
        sendErrorResponse(-1, "Invalid JSON: " + json_error.errorString());
        return;
    }

    QJsonObject jsonObj = jsonDoc.object();
    int messageId = jsonObj["id"].toInt();

    if (!jsonObj.contains("action")) {
        sendErrorResponse(-1, "Invalid message format");
        return;
    }

    QString action = jsonObj["action"].toString();

    // 处理不同的动作类型
    if (action == "web-message") {
        QJsonObject response;
        response["id"] = messageId;
        response["action"] = "web-message";
        response["data"] = jsonObj["data"];
        emit messageFromServer(QJsonDocument(response).toJson(QJsonDocument::Compact));
        return;
    } else if (action == "toggle-data-mode") {
        // 处理数据模式切换
        QJsonObject response;
        response["id"] = messageId;
        response["action"] = "toggle-data-mode";
        response["success"] = true;
        response["data"] = jsonObj["data"];
        emit responseFromServer(QJsonDocument(response).toJson(QJsonDocument::Compact));
        return;
    }

    // 其他任务消息
    if (!jsonObj.contains("id")) {
        sendErrorResponse(-1, "Invalid task format");
        return;
    }

    m_worker->addTask(jsonObj);
}

void ApiRouter::sendMsgToClient(const QString &message) {
    QJsonObject msgObj = QJsonDocument::fromJson(message.toLocal8Bit().data()).object();
    emit messageFromServer(QJsonDocument(msgObj).toJson(QJsonDocument::Compact));
}

void ApiRouter::onTaskFinished(QJsonObject result) {
    // 确保响应包含必要字段
    if (!result.contains("id")) {
        qDebug() << "Invalid task result: missing id";
        return;
    }

    QJsonObject response;
    response["id"] = result["id"];
    response["success"] = true;
    response["data"] = result["data"];

    QString responseJson = QJsonDocument(response).toJson(QJsonDocument::Compact);
    emit responseFromServer(responseJson);
}


void ApiRouter::sendErrorResponse(int id, const QString &error) {
    QJsonObject response;
    response["id"] = id;
    response["success"] = false;
    response["error"] = error;

    QString responseJson = QJsonDocument(response).toJson(QJsonDocument::Compact);
    emit responseFromServer(responseJson);
}

void ApiRouter::sendBinaryData(const QByteArray &data) {
    if (data.isEmpty()) {
        qWarning() << "Attempting to send empty binary data";
        return;
    }

    // 确保数据是按字节对齐的
    if (data.size() % sizeof(float) != 0) {
        qWarning() << "Binary data size is not properly aligned!";
        return;
    }
    QByteArray base64Data = data.toBase64();

    emit binaryFromServer(QString::fromLatin1(base64Data));
}