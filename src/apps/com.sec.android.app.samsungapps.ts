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
          matches: '[vid="skip"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14810528',
            'https://i.gkd.li/i/18329468',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '其他-[您是否年满 18 岁？]弹窗',
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
    {
      key: 2,
      name: '全屏广告-[大家还下载了]弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.detail.activity.ContentDetailActivity',
          matches:
            '@[desc="关闭"][clickable=true] - [vid="tv_detail_related_other_opp_title_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/de1b9cc4-c47e-456a-b975-5eefaedb5e42',
          snapshotUrls: 'https://i.gkd.li/i/18209149',
        },
      ],
    },
  ],
});
