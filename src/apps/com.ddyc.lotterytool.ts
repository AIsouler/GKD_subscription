import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ddyc.lotterytool.module.main.MainActivity',
      rules: [
        {
          matches:
            '@ImageButton[clickable=true][childCount=0] < LinearLayout < FrameLayout < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/13324555',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13325888',
        },
      ],
    },
  ],
});
