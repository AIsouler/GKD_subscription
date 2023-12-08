import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.dxy.idxyer',
  name: '丁香园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.dxy.idxyer:id/start_up_ad_skip_image"]',
      snapshotUrls: 'https://i.gkd.li/import/13561587',
    },
  ],
});
