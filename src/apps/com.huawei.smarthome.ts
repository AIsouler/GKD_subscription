import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.smarthome',
  name: '智慧生活',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="以后再说"] +2 [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12738253',
    },
  ],
});
