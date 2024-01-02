import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hyww.wisdomtree',
  name: '智慧树',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '百度广告',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] + RelativeLayout > RelativeLayout[childCount=6] > ImageView[childCount=0][index=5]',
          snapshotUrls: 'https://i.gkd.li/import/13799876',
        },
      ],
    },
  ],
});
