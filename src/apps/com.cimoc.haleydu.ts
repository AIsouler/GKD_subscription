import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.haleydu.cimoc.ui.activity.MainActivity',
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount>4] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/fe71e192-83bd-4db7-aed4-a01851b6f0bd',
          snapshotUrls: [
            'https://i.gkd.li/i/14318224',
            'https://i.gkd.li/i/14318235',
            'https://i.gkd.li/i/14318236',
          ],
        },
      ],
    },
  ],
});
