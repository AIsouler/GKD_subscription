import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.haixing.phonelive',
  name: '海星体育',
  groups: [
    {
      key: 1,
      name: '权限提示-]权限授权]弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.longya.live.activity.MainActivity',
          matches: ['[text*="权限授权"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/0524b810-b24f-4e5b-8a62-5b660b04255b',
          snapshotUrls: 'https://i.gkd.li/i/15369230',
        },
      ],
    },
  ],
});
