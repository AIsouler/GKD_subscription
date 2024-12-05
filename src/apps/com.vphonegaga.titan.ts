import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vphonegaga.titan',
  name: '光速虚拟机',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MyNativeActivity',
          matches:
            '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
          exampleUrls: 'https://e.gkd.li/ef6b8242-76d7-4ce5-b0fc-4444f72b9b39',
          snapshotUrls: 'https://i.gkd.li/i/13292911',
        },
      ],
    },
  ],
});
