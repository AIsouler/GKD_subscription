import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.net.shizheng.study',
  name: '365时政',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.dingwei.cloud_classroom.MainActivity',
          matches:
            'View[childCount=2] > ImageView[id=""] + Button[id=""][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708731',
        },
      ],
    },
  ],
});
