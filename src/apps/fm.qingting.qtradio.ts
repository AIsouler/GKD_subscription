import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
    {
      key: 1,
      name: '局部广告-播放界面的广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules: [
        '[id="fm.qingting.qtradio:id/view_ad_close"]',
        '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout > LinearLayout > TextView[text="广告"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12640438',
        'https://i.gkd.li/i/12640981',
      ],
    },
  ],
});
