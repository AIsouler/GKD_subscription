import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="跳过"][desc.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13258874',
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'cn.com.livelab.MainActivity',
      rules: 'View >n View[childCount=2] > ImageView + Button',
      snapshotUrls: 'https://i.gkd.li/import/13258873',
    },
  ],
});
