import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byd.aeri.caranywhere',
  name: '比亚迪王朝',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: [
            '[id="com.byd.aeri.caranywhere:id/tv_determine"][text="立即安装"]',
            '[id="com.byd.aeri.caranywhere:id/tv_cancel"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13348383',
        },
      ],
    },
  ],
});
