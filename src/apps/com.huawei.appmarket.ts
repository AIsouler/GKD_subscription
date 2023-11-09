import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.huawei.appmarket:id/skip_textview"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12683196',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.huawei.appmarket.MarketActivity',
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13228520',
    },
  ],
});
