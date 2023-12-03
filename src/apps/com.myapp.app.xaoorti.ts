import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.myapp.app.xaoorti',
  name: '天天视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.myapp.app.xaoorti:id/ksad_splash_circle_skip_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13520474',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
          matches: [
            'ViewGroup > ViewGroup > [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13520475',
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13520477',
        },
      ],
    },
  ],
});
