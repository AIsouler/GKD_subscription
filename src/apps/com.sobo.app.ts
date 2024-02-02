import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sobo.app',
  name: '素博影院',
  groups: [
    {
      key: 1,
      name: '全屏广告-注册邀请码弹窗',
      desc: '点击X',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.sobo.app.MainActivity',
          matches:
            '@ImageView[index=3] <4 View[childCount=4] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dabbfdcb-77fb-4298-aa63-899cbdbf1ceb',
          snapshotUrls: 'https://i.gkd.li/import/14133497',
        },
      ],
    },
  ],
});
