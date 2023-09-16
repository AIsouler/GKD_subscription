import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maque.app',
  name: '麻雀省钱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules: '[id="com.maque.app:id/ksad_splash_circle_skip_view"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12641032',
    },
    {
      key: 1,
      name: '首页活动弹窗',
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules:
        'ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12640100',
    },
  ],
});
