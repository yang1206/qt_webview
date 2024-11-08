//
// Created by Yang1206 on 2024/10/26.
//

#ifndef APIROUTER_H
#define APIROUTER_H


#pragma once

#include <QObject>
#include "worker.h"

class ApiRouter : public QObject {
    Q_OBJECT

public:
    explicit ApiRouter(Worker *worker);

public slots:
    // JSON 方法
    void requestFromClient(QString strParameter);
    void sendMsgToClient(const QString &message);

    // 二进制方法
    void sendBinaryData(const QByteArray &data);


    void onTaskFinished(QJsonObject result);

signals:
    void responseFromServer(QString response);
    void messageFromServer(QString message);
    void binaryFromServer(QString data);

private:
    void sendErrorResponse(int id, const QString &error);
    Worker *m_worker;
};


#endif // APIROUTER_H
