import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android',
  name: 'Android 系统',
  groups: [
    {
      key: 1,
      name: '功能类-app无响应-关闭',
      desc: '点击关闭',
      rules: [
        {
          // activityIds: [],
          fastQuery: true,
          matches: [
            '[vid="alertTitle"][text*="无响应"]',
            '[vid="aerr_close"][text="关闭应用"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24468450',
          exampleUrls: 'https://e.gkd.li/c87754c4-6fe1-4567-97c3-c74c8db3d561',
        },
      ],
    },
  ],
});
