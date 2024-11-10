import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16335041',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="用户已升级"] < * + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13218347',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'ctrip.android.publicproduct.home.view.CtripHomeActivity',
          matches:
            '@ImageView[clickable=true] < RelativeLayout + RelativeLayout >5 [desc^="广告"] + [text="立即领取"]',
          exampleUrls: 'https://e.gkd.li/00628604-fab9-432c-a70b-343c8c889c23',
          snapshotUrls: 'https://i.gkd.li/i/16357287',
        },
      ],
    },
  ],
});
