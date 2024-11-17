import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.litetao',
  name: '淘特',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        '[id="com.taobao.litetao:id/root_layout"] > TextView[text^="还剩"&&text$="秒"]',
      snapshotUrls: 'https://i.gkd.li/i/12774851',
    },
    {
      key: 1,
      name: '更新提示-版本升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id = "com.taobao.litetao:id/update_imageview_cancel_v2"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12843615',
        'https://i.gkd.li/i/12843614',
      ],
    },
  ],
});
