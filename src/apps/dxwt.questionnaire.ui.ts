import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="关闭"][desc.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13255491',
    },
  ],
});
