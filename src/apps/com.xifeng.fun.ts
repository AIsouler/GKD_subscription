import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xifeng.fun',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xifeng.fun.MainActivity',
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount>2] >(1,2) FrameLayout[childCount>4] >2 ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/14050836',
            'https://i.gkd.li/import/14235476',
            'https://i.gkd.li/import/14235478',
            'https://i.gkd.li/import/14235479',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告弹窗',
      desc: '点击"我知道了"',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="我知道了"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/971c3631-a9cc-4aec-992e-6cf1166eea1b',
          snapshotUrls: 'https://i.gkd.li/import/14235411',
        },
      ],
    },
  ],
});
