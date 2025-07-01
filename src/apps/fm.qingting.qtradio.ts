import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
    {
      key: 1,
      name: '局部广告-播放界面的广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: '.QTRadioActivity',
          matches: '[id="fm.qingting.qtradio:id/view_ad_close"]',
          exampleUrls: 'https://e.gkd.li/bef1954c-a0c8-441e-ab77-6967089e906c',
          snapshotUrls: 'https://i.gkd.li/i/12640438',
        },
        {
          key: 2,
          activityIds: '.QTRadioActivity',
          matches:
            '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/1562b618-074d-4f10-a1ae-c62c5390fd1a',
          snapshotUrls: 'https://i.gkd.li/i/12640981',
        },
      ],
    },
  ],
});
