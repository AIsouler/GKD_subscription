import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wisentsoft.chinapost.android',
  name: '中国邮政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@ImageView[clickable=true] <2 LinearLayout <3 ViewGroup < [vid="ll_main"]',
      snapshotUrls: 'https://i.gkd.li/i/15914347',
    },
  ],
});
