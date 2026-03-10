const sidebars = {
  tutorialSidebar: [

    {
      type: 'doc',
      id: 'intro',
      label: '开始使用',
    },

    {
      type: 'category',
      label: '系统介绍',
      items: [
        'system/system-intro',
        'system/training-process',
      ],
    },

    {
      type: 'category',
      label: '前台操作',
      items: [
        'pos/cashier',
        'pos/order',
      ],
    },

    {
      type: 'category',
      label: '基础功能',
      items: [
         {
            type: 'category',
            label: '首页功能',
            items: [
              'basic/home/homepage-function-description',
              'basic/home/daily-data-explanation',
              'basic/home/service-ranking-description',
              'basic/home/employee-ranking-description',
              'basic/home/today-reminders-description',
              'basic/home/today-appointments-description',             
            ],
          },
        'basic/product',
        'basic/project',
        'basic/schedule-function-description',
      ],
    },

    {
      type: 'category',
      label: '后台管理',
      items: [
        'backend/points',
      ],
    },

    {
      type: 'category',
      label: '高级配置',
      items: [
        'advanced/godaddy-ssl',
      ],
    },

    {
      type: 'category',
      label: '常见问题',
      items: [
        'faq/faq',
      ],
    },

  ],
};

export default sidebars;