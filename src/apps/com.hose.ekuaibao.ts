import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hose.ekuaibao',
  name: '易快报',
  groups: [
    {
      key: 1,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      name: '局部广告-首页横幅广告',
      rules: '[text="不感兴趣"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12649616',
        'https://i.gkd.li/i/18455642',
      ],
    },
  ],
});
