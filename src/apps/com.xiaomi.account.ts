import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.account',
  name: '小米账号',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="以后再说"] + [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/12781280',
    },
  ],
});
