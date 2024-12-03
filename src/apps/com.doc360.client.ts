import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.doc360.client',
  name: '个人图书馆',
  groups: [
    {
      key: 5,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.doc360.client.activity.ReadRoomActivity',
          matches:
            '@View[clickable=true] < FrameLayout[desc^="dislike"] -2 FrameLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13485051',
        },
      ],
    },
  ],
});
