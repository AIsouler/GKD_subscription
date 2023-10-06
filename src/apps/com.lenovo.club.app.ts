import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lenovo.club.app',
  name: '联想',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lenovo.club.app.AdActivity',
      rules: '[id="com.lenovo.club.app:id/tv_jump"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12829678',
    },
  ],
});
