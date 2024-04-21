import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pmph.irenwei',
  name: '人卫',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-抽奖弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.pmph.main.ad.AdActivity',
          matches: '[id="com.pmph.irenwei:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13897421',
        },
      ],
    },
  ],
});
