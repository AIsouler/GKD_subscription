import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.net.shizheng.study',
  name: '365时政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
      rules:
        'View[childCount=2] > ImageView[id=""] + Button[id=""][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12708731',
    },
  ],
});
