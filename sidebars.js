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

          {
            type: 'category',
            label: '基础设置',
            items: [
              'basic/settings/project',
              'basic/settings/product',
              'basic/settings/memberships',
              'basic/settings/vouchers',
              'basic/settings/packages',
              'basic/settings/gift-card',
            ],
          },
        'basic/schedule-function-description',
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
      label: '后台管理',
      items: [
        'backend/user-permissions'
      ],
    },

    {
      type: 'category',
      label: '高级配置',
      items: [
        'advanced/points',
        'advanced/project-consumption',
        'advanced/project-setting-scope',
        'advanced/gc-generate-send',
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