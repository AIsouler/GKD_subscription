import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xxx.pornhub.fuck',
  name: 'JavDB',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="跳过"][desc.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13334640',
    },
    {
      enable: false,
      key: 1,
      name: '公告弹窗',
      activityIds: 'app.lawnchair.LawnchairLauncher',
      rules: '[desc="公告"] + * + [desc="知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13334608',
    },
  ],
});
