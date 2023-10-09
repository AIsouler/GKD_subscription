import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.luckin.client.main.FirstActivity',
      rules: '[id="com.lucky.luckyclient:id/tv_skip"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12508764',
    },
    {
      key: 1,
      name: '软件更新',
      activityIds: 'com.luckin.client.main.FirstActivity',
      rules:
        '@ImageView[id="com.lucky.luckyclient:id/dismiss_btn"] - LinearLayout > ImageView[id="com.lucky.luckyclient:id/update_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12846499',
    },
  ],
});
