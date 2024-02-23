import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.danlan.xiaolan',
  name: 'Blued极速版',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '分段广告-"附近的人"页面广告卡片',
      activityIds: 'com.soft.blued.ui.home.HomeActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.danlan.xiaolan:id/ad_container"] >n [id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13421613',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13421622',
        },
      ],
    },
    {
      key: 3,
      quickFind: true,
      name: '分段广告-"来访"页面广告卡片',
      activityIds: 'com.blued.android.core.ui.TerminalActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13421923',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13422170',
        },
      ],
    },
  ],
});
