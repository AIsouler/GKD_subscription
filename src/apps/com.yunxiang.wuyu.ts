import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunxiang.wuyu',
  name: '特狗APP',
  groups: [
    {
      key: 2,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/i/13455634',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yunxiang.wuyu.MainActivity',
      rules: [
        {
          key: 1,
          name: '"x"型',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13455628',
        },
        {
          key: 2,
          name: '"跳过"型',
          matches: [
            'TextView[text="广告"]',
            '@ViewGroup > TextView[text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13455629',
        },
      ],
    },
  ],
});
