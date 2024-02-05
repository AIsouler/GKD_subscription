import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'cn.com.livelab.MainActivity',
      rules: 'View >n View[childCount=2] > ImageView + Button',
      snapshotUrls: 'https://i.gkd.li/import/13258873',
    },
  ],
});
