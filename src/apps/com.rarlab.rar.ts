import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      key: 10,
      name: '全屏广告-订购 RAR 弹窗',
      desc: '点击[放弃]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.rarlab.rar.MainActivity',
          matches:
            '[text="订购" || text="訂閱"] + [text="放弃" || text="解除"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12781596',
            'https://i.gkd.li/i/15801328',
          ],
        },
      ],
    },
  ],
});
