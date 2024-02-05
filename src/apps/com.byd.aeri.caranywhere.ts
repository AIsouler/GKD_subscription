import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.byd.aeri.caranywhere',
  name: '比亚迪王朝',
  groups: [
    {
      enable: false,
      key: 1,
      name: '更新提示',
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: ['com.byd.aeri.splash.module_splash.activity.TabManager'],
      rules: [
        {
          quickFind: true,
          matches: [
            '[id="com.byd.aeri.caranywhere:id/tv_determine"][text="立即安装"]',
            '[id="com.byd.aeri.caranywhere:id/tv_cancel"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13348383',
        },
      ],
    },
  ],
});
