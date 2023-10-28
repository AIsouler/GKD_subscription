import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qq.reader.activity.SplashActivity',
      rules: '[id="com.qq.reader:id/splash_container"] + [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12811930',
    },
    {
      key: 2,
      name: '青少年弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.reader:id/tv_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13194867',
    },
  ],
});
