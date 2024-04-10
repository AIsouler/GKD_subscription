import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.evs.echarge',
  name: 'e充电',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          activityIds: [
            'com.evs.echarge.dev.ui.advertisement.SplashActivity',
            'com.evs.echarge.dev.ui.MainActivity',
          ],
          matches: '[id="com.sgcc.evs.echarge:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13958838', //com.evs.echarge.dev.ui.advertisement.SplashActivity
            'https://i.gkd.li/i/14005508', //com.evs.echarge.dev.ui.MainActivity
          ],
        },
      ],
    },
  ],
});
