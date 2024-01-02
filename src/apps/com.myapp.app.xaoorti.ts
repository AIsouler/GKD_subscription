import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.myapp.app.xaoorti',
  name: '天天视频',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
          matches: [
            'ViewGroup > ViewGroup > [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13520475',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: 'com.ys.resemble.ui.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > [text="广告"]',
            '@ViewGroup > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13546700',
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: 'com.ys.resemble.ui.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > [text="广告"]',
            'ViewGroup > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13546701',
        },
        {
          key: 3,
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
