import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules: [
        '[id="fm.qingting.qtradio:id/third_skip_layout"||id="fm.qingting.qtradio:id/skip_ad"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12640433',
        'https://gkd-kit.gitee.io/import/12640971',
      ],
    },
    {
      key: 1,
      name: '播放界面的广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules: [
        '[id="fm.qingting.qtradio:id/view_ad_close"]',
        '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout > LinearLayout > TextView[text="广告"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12640438',
        'https://gkd-kit.gitee.io/import/12640981',
      ],
    },
  ],
});
