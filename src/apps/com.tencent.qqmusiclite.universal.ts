import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusiclite.universal',
  name: '音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2b50621d-8425-4b5f-aed7-aa767cf5eecf',
          snapshotUrls: 'https://i.gkd.li/i/18699697',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
          matches: '[vid="ad_skip_text"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0b1ba9a0-03a9-421c-88f2-cc3bd8d6be3c',
          snapshotUrls: 'https://i.gkd.li/i/18699710',
        },
      ],
    },
  ],
});
