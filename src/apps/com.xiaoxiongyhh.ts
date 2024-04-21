import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoxiongyhh',
  name: '小熊有好货',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '天降福利',
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            'View[childCount=2] > ImageView + Button[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13401975',
        },
      ],
    },
  ],
});
