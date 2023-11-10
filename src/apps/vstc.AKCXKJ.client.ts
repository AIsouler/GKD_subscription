import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'vstc.AKCXKJ.client',
  name: 'FOWL',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'vstc.AKCXKJ.client.SplashActivity',
        'vstc.AKCXKJ.client.MainActivity',
      ],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12661199'],
        },
        {
          matches: '@[id=null][text^="跳过"] < LinearLayout +(4) ImageView',
          snapshotUrls: ['https://i.gkd.li/import/12661178'],
        },
      ],
    },
  ],
});
