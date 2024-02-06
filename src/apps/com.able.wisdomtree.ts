import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.able.wisdomtree',
  name: '知到',
  deprecatedKeys: [1],
  groups: [
    {
      enable: false,
      key: 2,
      name: '通知提示-消息推送通知',
      desc: '自动点击暂不开启。',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.able.wisdomtree:id/negativeButton"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13458779',
        'https://i.gkd.li/import/13623441',
        'https://i.gkd.li/import/13695447',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新提示',
      desc: '自动点击忽略',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="更新"] -n [text="忽略"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13458796',
        'https://i.gkd.li/import/13797285',
      ],
    },
  ],
});
