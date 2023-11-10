import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.delicloud.app.smartoffice.mvp.ui.JiGuangSpalshActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12843738'],
        },
      ],
    },
  ],
});
