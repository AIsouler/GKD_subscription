import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.gamecenter.sdk.service',
  name: '小米游戏服务',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级提示"] < * + [vid="btn_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14188929',
    },
  ],
});
