import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.cctv5ultimate',
  name: '央视体育',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.cctv.cctv5ultimate.activity.MainActivity',
      rules: [
        {
          matches: [
            '[text="广告"]',
            '[id="com.cctv.cctv5ultimate:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13405159',
        },
      ],
    },
  ],
});
