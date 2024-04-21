import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xhgd.jx',
  name: '柠檬解析',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches: 'FrameLayout[childCount=4] > FrameLayout[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/13762226',
        },
      ],
    },
  ],
});
