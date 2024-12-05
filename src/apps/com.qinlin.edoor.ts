import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qinlin.edoor',
  name: '亲邻开门',
  groups: [
    {
      key: 1,
      name: '局部广告-首页顶部广告',
      activityIds: 'com.qinlin.edoor.MainActivity',
      rules: [
        {
          matches: [
            '[id="com.qinlin.edoor:id/reaper_ad_source_layout"]',
            '[id="com.qinlin.edoor:id/close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12707733',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches: [
            '[text="广告" || vid="interact_ad_root"]',
            '[vid="iv_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13771774',
            'https://i.gkd.li/i/13932707',
          ],
        },
        {
          key: 1,
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true] - [desc="立即领取" || desc="开心收下"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12707736',
            'https://i.gkd.li/i/12707738',
          ],
        },
      ],
    },
  ],
});
