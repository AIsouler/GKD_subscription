import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14810528',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-[您是否年满 18 岁？]弹窗',
      desc: '点击[是]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sec.android.app.samsungapps.SearchResultActivity',
          matches:
            '[text="您是否年满 18 岁？"] +4 @[clickable=true] > [text="是"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cee78493-fbe1-46a0-8dcf-a8b1f1f61f19',
          snapshotUrls: 'https://i.gkd.li/i/14473690',
        },
      ],
    },
  ],
});
