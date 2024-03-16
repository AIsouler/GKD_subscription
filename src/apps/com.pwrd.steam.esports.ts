import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
  groups: [
    {
      key: 1,
      name: '通知提示-开启推送通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="开启推送通知"] + [vid="tv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14622501',
    },
  ],
});
