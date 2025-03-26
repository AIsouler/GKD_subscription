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
          matches: '[text="前往开启"][visibleToUser=true] < RelativeLayout[vid="rl_account"][visibleToUser=true] <n LinearLayout[vid="ll_content_layout"][visibleToUser=true] + [vid="tv_cancel"][visibleToUser=true][clickable=true]',
          exampleUrls: 'https://e.gkd.li/8dd09677-8a02-4496-8611-c37b70e981d7',
          snapshotUrls: 'https://i.gkd.li/i/19442163',
        },
        {
          key: 1,
          activityIds: '.app.mainv2.view.MainActivity',
          matches: '[text^="开启系统通知"][visibleToUser=true] +n ImageView[vid="iv_notification_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8b4acc85-dacd-4ffc-a866-71e5b78c82b2',
          snapshotUrls: 'https://i.gkd.li/i/19442191',
        },
        {
          key: 2,
          activityIds: '.app.p_address.city.view.SelectCityActivity',
          matches: '[text="开启消息通知"] <n RelativeLayout -n ImageView[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bf0be55f-f9d1-4601-be21-b10b55a5bf6d',
          snapshotUrls: 'https://i.gkd.li/i/19460300',
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
          matches: '@ImageView[vid="close_iv"][visibleToUser=true][clickable=true] +n [text="写评价"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8bd038b0-c555-4ac5-b1c0-c31c351cd788',
          snapshotUrls: 'https://i.gkd.li/i/19442188',
        },
      ],
    },
    {
      key: 3,
      name: '会员券提示-贴片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ca.fantuan.customer.app.mainv2.view.MainActivity',
          matches: '[text^="立即领取"][visibleToUser=true] -n LinearLayout < ViewGroup < ViewGroup +n ImageView[vid="iv_close"][visibleToUser=true]',
          // 等效于 matches: '@ImageView[vid="iv_close"][visibleToUser=true] -n ViewGroup > ViewGroup > LinearLayout +n [text^="立即领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5e0fad94-ceee-4940-937d-e7ef93ab0223',
          snapshotUrls: 'https://i.gkd.li/i/19459880',
        },
      ],
    },
  ],
});
