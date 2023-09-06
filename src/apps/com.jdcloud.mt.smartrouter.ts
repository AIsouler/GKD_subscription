import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdcloud.mt.smartrouter',
  name: '京东云无线宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jdcloud.mt.smartrouter.nwelcome.WelcomeActivity',
      rules: 'LinearLayout > TextView[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12535237',
    },
  ],
});
