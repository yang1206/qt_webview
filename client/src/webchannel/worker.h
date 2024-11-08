//
// Created by Yang1206 on 2024/10/26.
//

#ifndef WORKER_H
#define WORKER_H
#pragma once

#include <QJsonObject>
#include <QMutex>
#include <QObject>
#include <QQueue>
class Worker : public QObject {
    Q_OBJECT

public:
    explicit Worker(QObject *parent = nullptr);
    ~Worker();

    void addTask(QJsonObject taskInfo);
    void stop();

public slots:
    void doTask();

signals:
    void taskFinished(QJsonObject result);

private:
    QJsonObject popTask();
    QJsonObject processTask(const QJsonObject &task);

    bool m_bStart = true;
    QMutex m_mutex;
    QQueue<QJsonObject> m_taskList;
};


#endif // WORKER_H
