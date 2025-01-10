import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ziroom.ziroomcustomer',
  name: '自如',
  groups: [
    {
      key: 1,
      name: '全屏弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '点击叉号关闭',
          activityIds: [
            '.MainActivity',
          ],
          matches: ['[text*="本弹窗由自如推送"] + * > [vid="tv_ok"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/18373198',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '推荐好友弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        '.MainActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击叉号关闭',
          matches: ['[text*="向亲朋好友推荐自如"] + [vid="iv_nps_close"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/18373218',
          ],
        },
      ],
    },
  ],
});
