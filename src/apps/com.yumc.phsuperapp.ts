import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yumc.phsuperapp',
  name: '必胜客',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yumc.android.phhome.ui.PhHomeV3Activity',
      rules: '[id="com.yumc.phsuperapp:id/splash_tv_3"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740217',
    },
  ],
});
