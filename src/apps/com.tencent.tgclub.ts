import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.tgclub',
  name: '心悦俱乐部',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.tencent.tgclub.business.appframe.WelcomeActivity',
      rules: '[id="com.tencent.tgclub:id/jump_time"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/import/13163289',
    },
  ],
});
