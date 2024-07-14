import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kurogame.kjq',
  name: '库街区',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.kurogame.kjq.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="sign_click"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15521224',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="bt_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15521225',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kurogame.kjq.MainActivity',
          matches: '[vid="close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3',
          snapshotUrls: 'https://i.gkd.li/i/15629864',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-鸣潮自动签到',
      activityIds: 'com.kurogame.kjq.profile.ui.activity.WebViewShareActivity',
      rules: [
        {
          key: 0,
          matches:
            '[text="《鸣潮》每日签到工具"] >6 ListView[childCount=12] > @View[childCount=3][visibleToUser=true] > TextView[width<150] <3 * + View[childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/15632005',
            'https://i.gkd.li/i/15632902', // 避免误触
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@TextView - * > [text="签到成功！"]',
          snapshotUrls: 'https://i.gkd.li/i/15632138',
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: 'View[text="《鸣潮》每日签到工具"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15632250',
        },
      ],
    },
  ],
});
