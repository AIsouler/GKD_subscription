import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alipay.mobile.quinox.LauncherActivity',
      rules:
        '[id="com.antfortune.wealth:id/welcome_page"] > RelativeLayout + View',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12776577',
    },
  ],
});
