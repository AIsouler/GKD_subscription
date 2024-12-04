import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.huanji',
  name: '小米换机',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[text="下次再说"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14332463',
        },
      ],
    },
  ],
});
