import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cctv.cctv5ultimate',
  name: '央视体育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text$="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/import/13405158',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.cctv.cctv5ultimate.activity.MainActivity',
      rules: [
        {
          matches: [
            '[text="广告"]',
            '[id="com.cctv.cctv5ultimate:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13405159',
        },
      ],
    },
  ],
});
