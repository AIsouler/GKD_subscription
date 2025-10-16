import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.readera',
  name: 'ReadEra',
  groups: [
    {
      key: 1,
      name: '评价提示-分享提示',
      desc: '点击右上角的x',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '[desc="关闭"][clickable=true][childCount=0] < FrameLayout + LinearLayout >3 [text*="通过社交网络分享这款应用"]',
          snapshotUrls: 'https://i.gkd.li/i/22950138',
        },
      ],
    },
  ],
});
