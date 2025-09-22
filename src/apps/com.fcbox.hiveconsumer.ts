import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢',
  groups: [
    {
      key: 7,
      name: '全屏广告-优惠券过期弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'kt.com.fcbox.hiveconsumer.app.business.main.MainActivity',
          matches: '[text*="优惠券"] + @[vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/22455763',
        },
      ],
    },
  ],
});
