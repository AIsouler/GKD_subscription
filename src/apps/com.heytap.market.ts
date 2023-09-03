import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.market',
  name: '软件商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
      rules:
        '[id="android:id/content"] > RelativeLayout > LinearLayout > [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506561',
    },
  ],
});
