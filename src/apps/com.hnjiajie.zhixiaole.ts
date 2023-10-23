import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hnjiajie.zhixiaole',
  name: '智校乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.hnjiajie.zhixiaole.MainActivity',
      matchLauncher: true,
      rules:
        '[id="com.hnjiajie.zhixiaole:id/splash_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13071717',
    },
  ],
});
