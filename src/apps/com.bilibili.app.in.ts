import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 5,
      name: '评价提示-评论区满意度评价',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@View[childCount=0][width<180 && height<180] - [childCount=0][text~="你.+评论.*氛围.+？"] <<n [vid="compose_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23125454',
            'https://i.gkd.li/i/23182150',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '评价提示-APP评分',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: ['[text="鼓励一下"]', '[text="下次再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/13180746',
        },
      ],
    },
    {
      key: 7,
      name: '通知提示-订阅感兴趣的通知',
      desc: '点击"暂不开启"',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.bilibili.bplus.im.communication.HomeCommunicationActivity',
          matches: ['[text="订阅感兴趣的通知"]', '[text="暂不开启"]'],
          exampleUrls: 'https://e.gkd.li/283c2be2-80d7-43ab-976c-0896e678fc49',
          snapshotUrls: 'https://i.gkd.li/i/18392097',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches: ['[text="打开推送通知"]', '[text="暂不"]'],
          exampleUrls: 'https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27',
          snapshotUrls: 'https://i.gkd.li/i/15907493',
        },
        {
          key: 1,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            '@Image < View + [id="subscribeContainer"] > [text="权益更新时推送通知"]',
          snapshotUrls: 'https://i.gkd.li/i/23714120',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动领取会员经验',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            '[text^="专属等级加速包"] +n @TextView[childCount=0][text="领取"] <<n [vid="webview"]',
        },
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/22886723', // 领取前
        'https://i.gkd.li/i/22886739', // 领取后
      ],
    },
    {
      key: 10,
      name: '功能类-自动关闭故事模式',
      desc: '播放视频时退出竖屏模式',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.video.story.StoryVideoActivity',
          matches: '[vid="story_ctrl_router"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c',
          snapshotUrls: 'https://i.gkd.li/i/18164075',
        },
      ],
    },
  ],
});
