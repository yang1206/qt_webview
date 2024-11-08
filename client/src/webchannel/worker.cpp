//
// Created by Yang1206 on 2024/10/26.
//

#include "worker.h"
#include <QDebug>
#include <QThread>
#include "apirouter.h"
Worker::Worker(QObject *parent) : QObject(parent) {}

Worker::~Worker() {}

void Worker::doTask() {
    while (m_bStart) {
        QJsonObject taskInfo = popTask();
        if (taskInfo.isEmpty()) {
            continue;
        }

        QJsonObject result = processTask(taskInfo);
        if (!result.isEmpty()) {
            emit taskFinished(result);
        }
    }
}

QJsonObject Worker::processTask(const QJsonObject &task) {
    QString action = task["action"].toString();
    qDebug() << "Processing task:" << action;

    QJsonObject result;
    result["id"] = task["id"];


    if (action == "send-msg") {
        result["data"] = task["data"];
    } else if (action == "send-msg-sync") {
        QThread::sleep(5);
        result["data"] = QString("Sync response after 5s: %1").arg(task["data"].toString());
    } else {
        qDebug() << "Unknown action:" << action;
        return QJsonObject();
    }

    return result;
}

void Worker::stop() { m_bStart = false; }

void Worker::addTask(QJsonObject taskInfo) {
    m_mutex.lock();
    m_taskList.push_front(taskInfo);
    m_mutex.unlock();
}

QJsonObject Worker::popTask() {
    m_mutex.lock();
    QJsonObject taskInfo;
    if (!m_taskList.isEmpty()) {
        taskInfo = m_taskList.dequeue();
    }
    m_mutex.unlock();
    return taskInfo;
}
