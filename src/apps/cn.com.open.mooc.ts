import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.open.mooc',
  name: '慕课网',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.imooc.component.imoocmain.splash.MCSplashActivity'],
      rules: [
        {
          matches: '[id="cn.com.open.mooc:id/stepOver"]',
          snapshotUrls: ['https://i.gkd.li/import/import/13185441'],
        },
      ],
    },
  ],
});
