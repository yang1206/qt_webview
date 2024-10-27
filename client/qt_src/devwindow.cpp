//
// Created by Yang1206 on 2024/10/26.
//

#include "devwindow.h"
#include <QGridLayout>
#include <QHBoxLayout>
#include <QStackedLayout>
#include <QWebEnginePage>

DevWindow::DevWindow(QWidget *parent) : QDialog(parent) {
    initUi();

    // 连接信号槽
    connect(btnClose, &QPushButton::clicked, this, [this]() { hide(); });

    connect(btnBack, &QPushButton::clicked, this, [this]() { devView->page()->triggerAction(QWebEnginePage::Back); });

    // 加载开发者工具页面
    devView->load(QUrl("http://localhost:5173"));
    QDialog::show();
}

DevWindow::~DevWindow() {
    // Qt 的父子对象系统会自动删除子对象，这里不需要手动删除
}

void DevWindow::initUi() {
    // 设置窗口初始大小
    resize(430, 331);
    setWindowTitle("Dialog");

    // 创建主布局
    QHBoxLayout *mainLayout = new QHBoxLayout(this);
    mainLayout->setContentsMargins(0, 0, 0, 0);

    // 创建主 Widget
    mainWidget = new QWidget(this);
    mainLayout->addWidget(mainWidget);

    // 创建主 Widget 的水平布局
    QHBoxLayout *widgetLayout = new QHBoxLayout(mainWidget);

    // 创建垂直分割器
    mainSplitter = new QSplitter(Qt::Vertical, mainWidget);
    widgetLayout->addWidget(mainSplitter);

    // 创建上部 WebView 框架
    webFrame = new QFrame(mainSplitter);
    webFrame->setFrameShape(QFrame::StyledPanel);
    webFrame->setFrameShadow(QFrame::Raised);

    // 创建 WebView 并添加到框架
    devView = new QWebEngineView(this);
    QStackedLayout *webLayout = new QStackedLayout(webFrame);
    webLayout->setContentsMargins(0, 0, 0, 0);
    webLayout->addWidget(devView);

    // 创建下部按钮框架
    buttonFrame = new QFrame(mainSplitter);
    buttonFrame->setFrameShape(QFrame::StyledPanel);
    buttonFrame->setFrameShadow(QFrame::Raised);

    // 创建按钮网格布局
    QGridLayout *buttonLayout = new QGridLayout(buttonFrame);

    // 创建按钮
    btnBack = new QPushButton("Back", buttonFrame);
    btnClose = new QPushButton("Close", buttonFrame);

    // 添加按钮到布局
    buttonLayout->addWidget(btnBack, 0, 0);
    buttonLayout->addWidget(btnClose, 0, 1);

    // 设置分割器的初始大小比例
    mainSplitter->setStretchFactor(0, 4); // webFrame 占 4
    mainSplitter->setStretchFactor(1, 1); // buttonFrame 占 1
}

void DevWindow::show() {
    devView->reload();
    QDialog::show();
}

void DevWindow::resizeEvent(QResizeEvent *event) {
    QDialog::resizeEvent(event);
    mainWidget->resize(size());
}
