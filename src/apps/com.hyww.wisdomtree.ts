import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hyww.wisdomtree',
  name: '智慧树',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '百度广告',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '[id="android:id/content"] >n RelativeLayout[childCount<=3] > ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13799876',
            'https://i.gkd.li/i/13852024',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      rules: [
        {
          key: 0,
          name: '信息流广告',
          quickFind: true,
          matches: '[vid="time_line_type"] <<n * > * > [vid="rl_down"]',
          snapshotUrls: 'https://i.gkd.li/i/13852023',
        },
      ],
    },
  ],
});
