import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '12306',
  groups: [
    {
      name: '开屏广告',
      fastQuery: true,
      key: 0,
      snapshotUrls: [
        'https://i.gkd.li/i/16606981'
      ],
      rules: [
        {
          matches: [
            'ImageView[desc="广告"] + FrameLayout > TextView'
          ]
        }
      ]
    }
  ]
});
