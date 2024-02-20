import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.One.WoodenLetter',
  name: '一个木函',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="新版本"] <2 * +2 * > [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/import/14332536',
    },
  ],
});
