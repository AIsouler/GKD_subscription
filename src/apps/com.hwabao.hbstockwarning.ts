import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hwabao.hbstockwarning',
  name: '华宝智投',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[id="com.hwabao.hbstockwarning:id/btn_skip"] [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13705367',
    },
  ],
});
