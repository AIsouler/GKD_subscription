import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.danlan.xiaolan',
  name: 'Blued极速版',
  groups: [
    {
      key: 3,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: [
        'com.blued.android.core.ui.TerminalActivity',
        'com.soft.blued.ui.home.HomeActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421613',
            'https://i.gkd.li/i/13421923',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421622',
            'https://i.gkd.li/i/13422170',
          ],
        },
      ],
    },
  ],
});
