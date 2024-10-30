import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    {
      key: 1,
      name: '功能类-签到成功弹窗',
      desc: '返回关闭弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          action: 'back',
          matches: '[text*="签到成功"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421535',
            'https://i.gkd.li/i/15048252',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          name: '收藏帖子后底部推荐关注卡片',
          fastQuery: true,
          activityIds:
            'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
          matches: '[vid="iv_notify_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f',
          snapshotUrls: 'https://i.gkd.li/i/14914139',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
            '.module.bbs.post.ui.activitys.PicturePostPageActivity',
          ],
          matches: '[text^="查看原图"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f7222b21-7037-4614-95ab-cff19ee15d38',
          snapshotUrls: [
            'https://i.gkd.li/i/16646832',
            'https://i.gkd.li/i/17574462',
          ],
        },
      ],
    },
  ],
});
