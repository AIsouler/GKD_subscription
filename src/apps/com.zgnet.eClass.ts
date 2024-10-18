import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12644260',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-退出确认弹窗',
      rules: [
        {
          matches:
            '[text*="确定要退出"] < LinearLayout +n LinearLayout > TextView[id$="tv_exit_sure"]',
          snapshotUrls: 'https://i.gkd.li/i/12645513',
        },
      ],
    },
  ],
});
