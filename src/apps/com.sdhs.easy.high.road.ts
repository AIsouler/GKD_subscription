import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdhs.easy.high.road',
  name: 'e高速',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: 'com.sdhs.easy.main.activity.MainActivity',
          matches:
            '[desc^="dislike"] > @View[clickable=true][visibleToUser=true] <<n [id="com.sdhs.easy.high.road:id/express_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13670340',
        },
      ],
    },
  ],
});
