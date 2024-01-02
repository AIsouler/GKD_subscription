import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
  groups: [
    {
      key: 1,
      name: '资讯页-信息流广告',
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      rules: '[id="hongbaotips"] +n @View > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13167193',
    },
  ],
});
