#!/bin/bash

# 确保在正确的目录
cd "/Users/pengyufeng/Desktop/POINT INSIGHT INNOVATION PRIVATE LIMITED"

echo "当前目录: $(pwd)"
echo "开始安装依赖..."

# 使用npm安装依赖
npm install --no-optional

echo "依赖安装完成，启动开发服务器..."

# 启动开发服务器
npm run dev
