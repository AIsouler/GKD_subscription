import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bokecc.dance',
  name: '糖豆',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击"以后再说"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches: '[text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9156698c-76bb-4921-a39d-96a20c45260b',
          snapshotUrls: 'https://i.gkd.li/i/14071977',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-视频播放前的广告',
      desc: '5秒后点击关闭广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bokecc.dance.player.DancePlayActivity',
          matches: '[text="关闭广告"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/f70ca3e3-762c-47ba-aed8-c9e8d5955b7e',
          snapshotUrls: 'https://i.gkd.li/i/14318204',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.bokecc.dance.activity.MainActivity',
          matches: '[vid="iv_bottom"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e866b196-04f3-454a-9eb3-a766fed952ba',
          snapshotUrls: 'https://i.gkd.li/i/14318249',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.bokecc.dance.player.DancePlayActivity',
          matches: '[vid="iv_cancel"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/45eb8c79-f683-4fcd-a2c4-0c9d1ff9d998',
          snapshotUrls: 'https://i.gkd.li/i/14318261',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
          exampleUrls: 'https://e.gkd.li/d3e73052-1459-4b3b-baf2-a3620226985f',
          snapshotUrls: [
            'https://i.gkd.li/i/18627429',
            'https://i.gkd.li/i/18627432',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: ['[text="广告"]', '[vid="iv_close"]'],
          exampleUrls: 'https://e.gkd.li/717ad9b7-dce7-4284-9360-4f9923ebacd7',
          snapshotUrls: 'https://i.gkd.li/i/18627427',
        },
      ],
    },
  ],
});
