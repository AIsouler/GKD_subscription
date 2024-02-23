import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.time_todo',
  name: 'CliCli动漫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.maoyun.guoguo.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13759356',
        },
        {
          key: 1,
          name: '百度广告',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13761232',
        },
      ],
    },
  ],
});
