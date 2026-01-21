import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qc.mycomic',
  name: 'MyComic',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      // 该广告不止在开屏时出现
      // matchTime: 10000,
      // actionMaximum: 1,
      // resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@[clickable=true] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15443225',
        },
      ],
    },
  ],
});
