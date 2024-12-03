import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      key: 2,
      name: '局部广告-信息流广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.duitang.main.business.',
            'com.duitang.main.activity.',
          ],
          matches: '[vid="adOptionEntry" || vid="adClose"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14232228',
            'https://i.gkd.li/i/14232332',
            'https://i.gkd.li/i/14232347',
            'https://i.gkd.li/i/14232348',
            'https://i.gkd.li/i/14232368',
            'https://i.gkd.li/i/14232218',
            'https://i.gkd.li/i/14232352',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      desc: '点击[下次再说]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.business.main.NAMainActivity',
          matches: '[vid="scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14273094',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-图片页弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.duitang.main.business.display.ImageActivity',
            'com.duitang.main.business.main.NAMainActivity',
          ],
          matches: '[id="com.duitang.main:id/popUpbtnClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13997011',
            'https://i.gkd.li/i/14332109',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.business.main.NAMainActivity',
          matches: '@[vid="dialogNegative"] +2 [text="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/14273121',
        },
      ],
    },
  ],
});
