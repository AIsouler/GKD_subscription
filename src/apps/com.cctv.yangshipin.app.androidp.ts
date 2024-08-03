import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.yangshipin.app.androidp',
  name: '央视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8f722fca-4f50-4d5e-bbb6-14276f973404',
          snapshotUrls: 'https://i.gkd.li/i/16479226',
        },
      ],
    },
  ],
});
