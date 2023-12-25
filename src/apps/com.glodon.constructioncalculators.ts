import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.glodon.constructioncalculators',
  name: '建工计算器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.glodon.constructioncalculators.main.SplashActivityTt',

      rules: '@[text^="跳过"] < LinearLayout +n ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12882803',
    },
  ],
});
