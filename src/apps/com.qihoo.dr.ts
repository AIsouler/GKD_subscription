import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo.dr',
  name: '360行车助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qihoo.dr.ActivityWelcome',
      rules: '[id="com.qihoo.dr:id/fl_ad"] >n [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12740163',
    },
  ],
});
