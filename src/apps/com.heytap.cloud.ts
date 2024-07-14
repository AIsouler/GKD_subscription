import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.cloud',
  name: '云服务',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.heytap.cloud.home.ui.CloudSettingsActivity2',
          matches: ['[text="检测到新版本"]', '[vid="cancel"]'],
          snapshotUrls: 'https://i.gkd.li/i/16097208',
        },
      ],
    },
  ],
});
