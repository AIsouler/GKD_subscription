import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.pingou',
  name: '京喜',
  groups: [
    {
      key: 1,
      name: '定位提示-底部申请定位浮窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '[text*="开启定位授权"] +2 ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13804515',
    },
  ],
});
