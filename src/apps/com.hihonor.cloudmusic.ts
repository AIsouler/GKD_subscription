import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '荣耀音乐',
  groups: [
    {
      key: 1,
      name: '分段广告-推荐页卡片广告',
      desc: '点击[关闭]-点击[直接关闭]',
      fastQuery: true,
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="tag_ad_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/15835795',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/15835857',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          action: 'back',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="dsl_dialog_root"]',
          snapshotUrls: 'https://i.gkd.li/i/15860430',
        },
      ],
    },
  ],
});
