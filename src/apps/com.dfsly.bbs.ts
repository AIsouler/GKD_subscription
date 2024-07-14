import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dfsly.bbs',
  name: 'AC匿名版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="android:id/content"] >7 FrameLayout[childCount=7] > LinearLayout >3 ImageView[text=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13330351',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: ['com.dfsly.bbs.ui.NavigationActivity'],
      fastQuery: true,
      rules: [
        {
          matches: [
            '[id="android:id/content"] >n FrameLayout[childCount=5 || childCount=8] > FrameLayout > ImageView[text=null][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13343675',
            'https://i.gkd.li/i/13335135',
            'https://i.gkd.li/i/13335316',
          ],
        },
      ],
    },
  ],
});
