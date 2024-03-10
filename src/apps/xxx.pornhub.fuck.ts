import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xxx.pornhub.fuck',
  name: 'JavDB',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="公告"] + * + [desc="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13334608',
    },
  ],
});
