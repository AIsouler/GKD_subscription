import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.changyou.app.qi',
  name: '777影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.changyou.app.qi.MainActivity',
          matches: '[vid="ksad_auto_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/687f8201-8b15-491e-9c51-f3af0dc00260',
          snapshotUrls: 'https://i.gkd.li/import/14228685',
        },
        {
          key: 1,
          activityIds: 'com.changyou.app.qi.MainActivity',
          matches:
            '[id="android:id/content"] >2 FrameLayout[childCount=4] > FrameLayout[childCount=5] > FrameLayout[index=2][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c65e146e-4f2a-42f0-b233-4e04152d851d',
          snapshotUrls: 'https://i.gkd.li/import/14296913',
        },
      ],
    },
  ],
});
