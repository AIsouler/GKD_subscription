import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.funinput.digit',
  name: '数字尾巴',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="跳过"] <<n [id="com.funinput.digit:id/ad_container"]',
      snapshotUrls: 'https://i.gkd.li/import/13450872',
    },
  ],
});
