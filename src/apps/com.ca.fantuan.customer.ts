import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ca.fantuan.customer',
  name: 'Fantuan Delivery',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.app.orderdetail.view.OrderDetailActivity',
          matches: [
            '[text^="开启消息通知"][visibleToUser=true]',
            '[vid="tv_cancel"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8dd09677-8a02-4496-8611-c37b70e981d7',
          snapshotUrls: 'https://i.gkd.li/i/19442163',
        },
        {
          key: 1,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: '[vid="iv_notification_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8b4acc85-dacd-4ffc-a866-71e5b78c82b2',
          snapshotUrls: 'https://i.gkd.li/i/19442191',
        },
      ],
    },
    {
      key: 2,
      name: '评价提示-下单后的评价弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: '[text="写评价"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8bd038b0-c555-4ac5-b1c0-c31c351cd788',
          snapshotUrls: 'https://i.gkd.li/i/19442188',
        },
      ],
    },
  ],
});
