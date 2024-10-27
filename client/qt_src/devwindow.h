//
// Created by Yang1206 on 2024/10/26.
//

#ifndef DEVWINDOW_H
#define DEVWINDOW_H
#include <QDialog>
#include <QFrame>
#include <QPushButton>
#include <QSplitter>
#include <QWebEngineView>

class DevWindow : public QDialog {
    Q_OBJECT

public:
    explicit DevWindow(QWidget *parent = nullptr);
    ~DevWindow();
    void show();

protected:
    void resizeEvent(QResizeEvent *) override;

private:
    void initUi(); // 添加初始化UI的方法

    // UI 组件
    QWidget *mainWidget;
    QSplitter *mainSplitter;
    QFrame *webFrame;
    QFrame *buttonFrame;
    QPushButton *btnBack;
    QPushButton *btnClose;
    QWebEngineView *devView;
};

#endif // DEVWINDOW_H
