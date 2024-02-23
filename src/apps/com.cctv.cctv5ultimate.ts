import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cctv.cctv5ultimate',
  name: '央视体育',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      quickFind: true,
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
