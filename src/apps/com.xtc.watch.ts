import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xtc.watch',
  name: '小天才',
  groups: [
    {
      enable: false,
      key: 2,
      name: '更新提示-通知提示',
      desc: '已知包括APP升级提醒与开启通知提醒，自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.xtc.watch:id/iv_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197390',
        'https://i.gkd.li/import/13063274',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '通知提示-请求开启通知提醒弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: ['[id="com.xtc.watch:id/iv_notify_permission_close"]'],
          snapshotUrls: ['https://i.gkd.li/import/13059965'],
        },
      ],
    },
  ],
});
