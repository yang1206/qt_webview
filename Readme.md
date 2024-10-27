# 项目说明

该项目是基于qt6.7.2和vue3开发的，主要用于演示qt与web的通信。

## 项目结构

- `web` vue3 web前端
- `client` qt客户端

## 项目运行

请先安装好qt6.7.2和cmake以及nodejs

```bash
cd web
pnpm install
pnpm run dev
```

```bash
cd client
cmake .
make
./client
```

## 项目功能

- web与qt的通信
