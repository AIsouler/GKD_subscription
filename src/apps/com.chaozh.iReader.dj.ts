import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.chaozh.iReader.ui.activity.WelcomeActivity'],
      rules: [
        {
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13175317',
        },
      ],
    },
  ],
});
