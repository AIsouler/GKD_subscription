import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.banjixiaoguanjia.app',
  name: '班级小管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zero.flutter_gromore_ads.page.AdSplashActivity',

      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12904614',
    },
    {
      key: 1,
      name: '应用内广告卡片',
      activityIds: 'com.banjixiaoguanjia.app.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_bu_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12904612',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12906196',
        },
      ],
    },
  ],
});
