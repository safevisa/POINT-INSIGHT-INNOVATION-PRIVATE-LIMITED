# 无人零售SaaS平台 - 快速启动指南

## 项目概述

这是一个完整的无人零售SaaS平台，包含以下功能：
- 用户注册登录系统
- 用户资料管理
- 支付方式管理
- 设备绑定和管理
- 实时仪表板
- 支付处理
- 多语言支持（英文、中文简体、中文繁体）

## 技术栈

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL + Prisma ORM
- **认证**: NextAuth.js
- **支付**: Stripe
- **国际化**: react-i18next

## 快速开始

### 1. 环境要求

确保您的系统已安装：
- Node.js 18+
- PostgreSQL 数据库
- Git

### 2. 安装依赖

```bash
npm install
```

### 3. 环境配置

创建 `.env.local` 文件并配置以下变量：

```env
# 数据库
DATABASE_URL="postgresql://username:password@localhost:5432/unmanned_retail_saas"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"

# Stripe (可选，用于支付功能)
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# 邮件配置 (使用公司域名)
EMAIL_SERVER_HOST="smtp.point-insight.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="noreply@point-insight.com"
EMAIL_SERVER_PASSWORD="your-email-password"
EMAIL_FROM="noreply@point-insight.com"

# 应用配置
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Unmanned Retail SaaS"
```

### 4. 数据库设置

```bash
# 生成Prisma客户端
npx prisma generate

# 推送数据库模式
npx prisma db push

# 可选：打开数据库管理界面
npx prisma studio
```

### 5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 功能说明

### 主要页面

1. **首页** (`/`) - 产品介绍和免费试用
2. **登录** (`/auth/signin`) - 用户登录
3. **注册** (`/auth/signup`) - 用户注册
4. **仪表板** (`/dashboard`) - 用户工作台
5. **设备管理** (`/machines`) - 管理售货机设备
6. **支付方式** (`/cards`) - 管理支付卡片
7. **支付** (`/payments`) - 处理支付
8. **订单历史** (`/orders`) - 查看订单记录
9. **个人资料** (`/profile`) - 用户资料设置

### 数据库模型

- **User** - 用户信息
- **Card** - 支付卡片
- **Machine** - 售货机设备
- **Order** - 订单
- **Payment** - 支付记录

## 部署

### Vercel (推荐)

1. 将代码推送到GitHub
2. 在Vercel中连接仓库
3. 配置环境变量
4. 部署

### 其他平台

应用可以部署到任何支持Next.js的平台：
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 开发说明

### 项目结构

```
├── app/                    # Next.js应用目录
│   ├── api/               # API路由
│   ├── auth/              # 认证页面
│   ├── dashboard/         # 用户仪表板
│   ├── machines/          # 设备管理
│   ├── profile/           # 用户资料
│   └── cards/             # 支付方式
├── components/            # 可复用UI组件
├── lib/                   # 工具函数和配置
├── prisma/                # 数据库模式
└── public/                # 静态资源
```

### 多语言支持

应用支持三种语言：
- 英文 (en) - 默认
- 中文简体 (zh)
- 中文繁体 (zh-TW)

语言切换通过 `useTranslation` hook 实现。

### 样式系统

使用Tailwind CSS，包含：
- 响应式设计
- 深色/浅色主题支持
- 自定义颜色方案
- 组件样式类

## 故障排除

### 常见问题

1. **数据库连接失败**
   - 检查PostgreSQL是否运行
   - 验证DATABASE_URL配置

2. **认证问题**
   - 确保NEXTAUTH_SECRET已设置
   - 检查NEXTAUTH_URL配置

3. **支付功能不工作**
   - 验证Stripe密钥配置
   - 检查webhook端点设置

### 获取帮助

如有问题，请联系：
- 邮箱：support@point-insight.com
- 查看README.md获取更多信息

## 许可证

© 2024 POINT INSIGHT INNOVATION PRIVATE LIMITED. 保留所有权利。
