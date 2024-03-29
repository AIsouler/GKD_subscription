import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '通知提示-开启通知服务',
      desc: '选择[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.mcdonalds.gma.cn:id/tv_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13259242',
    },
    {
      key: 2,
      name: '全屏广告-优惠券弹窗',
      desc: '自动关闭',
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
          matches: '[id="com.mcdonalds.gma.cn:id/iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13465873',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭[开通免密支付]弹窗',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mcd.order.activity.OrderDetailActivity',
          matches: '@[vid="iv_close"] - * >2 [text*="免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb',
          snapshotUrls: 'https://i.gkd.li/i/14798873',
        },
      ],
    },
  ],
});
