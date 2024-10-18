import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crirp.zhipu',
  name: '智谱',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13725305',
        },
      ],
    },
    {
      name: '全屏广告-今日要闻弹窗',
      key: 2,
      desc: '点击不再提示',
      fastQuery: true,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/13725337',
        },
      ],
    },
  ],
});
