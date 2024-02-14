import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      key: 1,
      actionMaximum: 1,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/teenGuideKnown"]',
          snapshotUrls: 'https://i.gkd.li/import/13202230',
        },
      ],
    },
    {
      name: '局部广告-信息流广告',
      key: 2,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.duitang.main.business.',
            'com.duitang.main.activity.',
          ],
          quickFind: true,
          matches: '[vid="adOptionEntry"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/14232228',
            'https://i.gkd.li/import/14232332',
            'https://i.gkd.li/import/14232347',
            'https://i.gkd.li/import/14232348',
            'https://i.gkd.li/import/14232368',
          ],
        },
        {
          key: 1,
          activityIds: 'com.duitang.main.business.',
          quickFind: true,
          matches: '[vid="adClose"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/14232218',
            'https://i.gkd.li/import/14232352',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      desc: '点击[下次再说]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[vid="scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/import/14273094',
        },
      ],
    },
    {
      key: 4,
      quickFind: true,
      name: '全屏广告-图片页广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.duitang.main.business.display.ImageActivity',
          matches: '[id="com.duitang.main:id/popUpbtnClose"]',
          snapshotUrls: 'https://i.gkd.li/import/13997011',
        },
      ],
    },
    {
      key: 5,
      name: '通知提示-请求开启通知弹窗',
      desc: '点击[x]',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[vid="dialogNegative"] +2 [text="打开通知"]',
      snapshotUrls: 'https://i.gkd.li/import/14273121',
    },
  ],
});
