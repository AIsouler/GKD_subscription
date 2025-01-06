import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.activity.MainActivity',
          matches: ['[text*="开启通知服务"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/64df0999-cd85-48c3-871f-5e65e9131d6e',
          snapshotUrls: 'https://i.gkd.li/i/13259242',
        },
        {
          key: 1,
          activityIds: 'com.mcd.order.activity.OrderDetailActivity',
          matches: '@[vid="v_cancel"] + [vid="v_open"]',
          exampleUrls: 'https://e.gkd.li/123fc7d2-b2a3-41fb-8e4c-50f625b195c4',
          snapshotUrls: 'https://i.gkd.li/i/17092374',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          forcedTime: 10000, // https://github.com/AIsouler/GKD_subscription/issues/677
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6a95fcb7-3f9c-43f8-80bb-bdd034c81252',
          snapshotUrls: 'https://i.gkd.li/i/17967920',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.mcd.order.activity.OrderActivity',
          matches: '[vid="recommend_product_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f3670e7-a0c9-47a5-b708-163a94ac2a8f',
          snapshotUrls: 'https://i.gkd.li/i/17967943',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭[开通免密支付]弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mcd.order.activity.OrderDetailActivity',
          matches: '@[vid="iv_close"] - * >2 [text*="免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb',
          snapshotUrls: 'https://i.gkd.li/i/14798873',
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-设备信息权限',
      desc: '点击[不允许]',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.LaunchActivity',
          matches: '[text$="获取您的设备信息"] + * > [text="不允许"]',
          exampleUrls:
            'https://m.gkd.li/101449500/121c7e65-780e-41aa-acf8-34c491d4be41',
          snapshotUrls: 'https://i.gkd.li/i/15944357',
        },
      ],
    },
  ],
});
