import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16335041',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="用户已升级"] < * + [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13218347',
    },
  ],
});
