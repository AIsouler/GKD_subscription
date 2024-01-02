import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
    {
      key: 1,
      name: '播放界面的广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules: [
        '[id="fm.qingting.qtradio:id/view_ad_close"]',
        '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout > LinearLayout > TextView[text="广告"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12640438',
        'https://i.gkd.li/import/12640981',
      ],
    },
  ],
});
