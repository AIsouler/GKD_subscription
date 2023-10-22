import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'run.xbud.android',
  name: '小步点',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'run.xbud.android.mvp.ui.other.SplashActivity',
      rules: '[id="run.xbud.android:id/bodyLayout"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12777125',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'run.xbud.android.mvp.ui.other.MainActivity',
      rules:
        '[id="run.xbud.android:id/ksad_tk_view"] >n @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/12777133',
        'https://i.gkd.li/import/12777134',
      ],
    },
  ],
});
