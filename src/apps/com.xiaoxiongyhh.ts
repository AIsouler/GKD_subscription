import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaoxiongyhh',
  name: '小熊有好货',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 1,
          name: '天降福利',
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches:
            'View[childCount=2] > ImageView + Button[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13401975',
        },
      ],
    },
  ],
});
