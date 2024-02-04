import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hxzd.wcf',
  name: '五寸方',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.hxzd.wcf.ui.MainActivity',
          matches: '[id="com.hxzd.wcf:id/btn_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/88897f2d-647e-47f8-8e43-1fe349b3442d',
          snapshotUrls: 'https://i.gkd.li/import/14155547',
        },
      ],
    },
  ],
});
