import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tw.nekomimi.nekogram',
  name: 'Nekogram',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="稍后提醒我"] -3 * >2 [text="更新 Nekogram"]',
      snapshotUrls: 'https://i.gkd.li/import/14229236',
    },
  ],
});
