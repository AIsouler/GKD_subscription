import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.crirp.zhipu',
  name: '智谱',
  deprecatedKeys: [3],
  groups: [
    {
      name: '开屏广告',
      key: 1,
      enable: true,
      matchTime: 10000,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
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
      enable: false,
      quickFind: true,
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
