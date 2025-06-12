import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'pro.cubox.androidapp',
  name: 'Cubox稍后读',
  groups: [
    {
      key: 1,
      name: '加入会员弹窗',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.pro.ProAccountActivity',
          matches: ['@[clickable=true][childCount=0][name="android.view.View"] - [text*="支付宝" && text*="微信"]'],
          snapshotUrls: 'https://i.gkd.li/i/20708841',
        },
      ],
    },
  ],
});
