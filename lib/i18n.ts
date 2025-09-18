import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Common
      common: {
        loading: 'Loading...',
        error: 'An error occurred',
        success: 'Success',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        back: 'Back',
        next: 'Next',
        submit: 'Submit',
        confirm: 'Confirm',
      },
      // Navigation
      nav: {
        home: 'Home',
        features: 'Features',
        solutions: 'Solutions',
        pricing: 'Pricing',
        about: 'About',
        dashboard: 'Dashboard',
        machines: 'Machines',
        payments: 'Payments',
        profile: 'Profile',
        signIn: 'Sign In',
        signUp: 'Sign Up',
        signOut: 'Sign Out',
        freeTrial: 'Free Trial',
      },
      // Auth
      auth: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        name: 'Full Name',
        forgotPassword: 'Forgot Password?',
        noAccount: "Don't have an account?",
        hasAccount: 'Already have an account?',
        signInSuccess: 'Successfully signed in',
        signUpSuccess: 'Account created successfully',
        invalidCredentials: 'Invalid email or password',
        emailExists: 'Email already exists',
      },
      // Profile
      profile: {
        title: 'Profile Settings',
        companyName: 'Company Name',
        phoneNumber: 'Phone Number',
        address: 'Address',
        city: 'City',
        country: 'Country',
        language: 'Language',
        timezone: 'Timezone',
        updateSuccess: 'Profile updated successfully',
      },
      // Cards
      cards: {
        title: 'Payment Methods',
        addCard: 'Add Card',
        cardNumber: 'Card Number',
        cardHolder: 'Card Holder Name',
        expiryDate: 'Expiry Date',
        cvv: 'CVV',
        defaultCard: 'Default Card',
        addSuccess: 'Card added successfully',
        deleteSuccess: 'Card deleted successfully',
        noCards: 'No payment methods added',
      },
      // Machines
      machines: {
        title: 'My Machines',
        addMachine: 'Add Machine',
        machineName: 'Machine Name',
        location: 'Location',
        machineId: 'Machine ID',
        status: 'Status',
        lastSeen: 'Last Seen',
        active: 'Active',
        inactive: 'Inactive',
        maintenance: 'Maintenance',
        addSuccess: 'Machine added successfully',
        deleteSuccess: 'Machine removed successfully',
        noMachines: 'No machines added yet',
      },
      // Dashboard
      dashboard: {
        title: 'Dashboard',
        welcome: 'Welcome back',
        totalMachines: 'Total Machines',
        activeMachines: 'Active Machines',
        totalRevenue: 'Total Revenue',
        recentOrders: 'Recent Orders',
        quickActions: 'Quick Actions',
      },
      // Homepage
      home: {
        hero: {
          title: 'Revolutionize Your Retail with Unmanned Stores',
          subtitle: 'Complete SaaS solution for automated retail operations. Start your free trial today.',
          cta: 'Start Free Trial',
          learnMore: 'Learn More',
        },
        features: {
          title: 'Why Choose Our Platform',
          automated: 'Fully Automated',
          automatedDesc: 'Complete unmanned retail solution',
          analytics: 'Real-time Analytics',
          analyticsDesc: 'Track sales and performance',
          payments: 'Secure Payments',
          paymentsDesc: 'Multiple payment options',
          support: '24/7 Support',
          supportDesc: 'Always here to help',
        },
        pricing: {
          title: 'Simple, Transparent Pricing',
          free: 'Free Trial',
          freeDesc: '14 days free trial',
          pro: 'Professional',
          proDesc: 'Perfect for growing businesses',
          enterprise: 'Enterprise',
          enterpriseDesc: 'For large operations',
        },
      },
    },
  },
  zh: {
    translation: {
      // Common
      common: {
        loading: '加载中...',
        error: '发生错误',
        success: '成功',
        cancel: '取消',
        save: '保存',
        delete: '删除',
        edit: '编辑',
        back: '返回',
        next: '下一步',
        submit: '提交',
        confirm: '确认',
      },
      // Navigation
      nav: {
        home: '首页',
        features: '功能特性',
        solutions: '解决方案',
        pricing: '定价',
        about: '关于我们',
        dashboard: '仪表板',
        machines: '设备',
        payments: '支付',
        profile: '个人资料',
        signIn: '登录',
        signUp: '注册',
        signOut: '退出',
        freeTrial: '免费试用',
      },
      // Auth
      auth: {
        signIn: '登录',
        signUp: '注册',
        email: '邮箱',
        password: '密码',
        confirmPassword: '确认密码',
        name: '姓名',
        forgotPassword: '忘记密码？',
        noAccount: '还没有账户？',
        hasAccount: '已有账户？',
        signInSuccess: '登录成功',
        signUpSuccess: '账户创建成功',
        invalidCredentials: '邮箱或密码错误',
        emailExists: '邮箱已存在',
      },
      // Profile
      profile: {
        title: '个人资料设置',
        companyName: '公司名称',
        phoneNumber: '电话号码',
        address: '地址',
        city: '城市',
        country: '国家',
        language: '语言',
        timezone: '时区',
        updateSuccess: '个人资料更新成功',
      },
      // Cards
      cards: {
        title: '支付方式',
        addCard: '添加卡片',
        cardNumber: '卡号',
        cardHolder: '持卡人姓名',
        expiryDate: '有效期',
        cvv: 'CVV',
        defaultCard: '默认卡片',
        addSuccess: '卡片添加成功',
        deleteSuccess: '卡片删除成功',
        noCards: '未添加支付方式',
      },
      // Machines
      machines: {
        title: '我的设备',
        addMachine: '添加设备',
        machineName: '设备名称',
        location: '位置',
        machineId: '设备ID',
        status: '状态',
        lastSeen: '最后在线',
        active: '活跃',
        inactive: '离线',
        maintenance: '维护中',
        addSuccess: '设备添加成功',
        deleteSuccess: '设备移除成功',
        noMachines: '尚未添加设备',
      },
      // Dashboard
      dashboard: {
        title: '仪表板',
        welcome: '欢迎回来',
        totalMachines: '总设备数',
        activeMachines: '活跃设备',
        totalRevenue: '总收入',
        recentOrders: '最近订单',
        quickActions: '快速操作',
      },
      // Homepage
      home: {
        hero: {
          title: '用无人商店革新您的零售业务',
          subtitle: '完整的SaaS自动化零售解决方案。立即开始免费试用。',
          cta: '开始免费试用',
          learnMore: '了解更多',
        },
        features: {
          title: '为什么选择我们的平台',
          automated: '完全自动化',
          automatedDesc: '完整的无人零售解决方案',
          analytics: '实时分析',
          analyticsDesc: '跟踪销售和性能',
          payments: '安全支付',
          paymentsDesc: '多种支付选项',
          support: '24/7支持',
          supportDesc: '随时为您服务',
        },
        pricing: {
          title: '简单透明的定价',
          free: '免费试用',
          freeDesc: '14天免费试用',
          pro: '专业版',
          proDesc: '适合成长中的企业',
          enterprise: '企业版',
          enterpriseDesc: '适合大型运营',
        },
      },
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
