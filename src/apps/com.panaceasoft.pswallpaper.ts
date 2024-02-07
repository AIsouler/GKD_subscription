import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.panaceasoft.pswallpaper',
  name: 'ClrvAI',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        '[vid="tv_next"][text="下一条"] <<n LinearLayout - [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14141561',
    },
  ],
});
