import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.pingou',
  name: '京喜',
  groups: [
    {
      key: 1,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '[text*="开启定位授权"] +2 ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13804515',
    },
  ],
});
