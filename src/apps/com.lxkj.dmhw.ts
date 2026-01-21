import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lxkj.dmhw',
  name: '呆萌价',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.8981',
            top: 'width * 0.1629',
          },
          matches: '[id="com.lxkj.dmhw:id/animation_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13246178',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15454142',
        },
      ],
    },
  ],
});
