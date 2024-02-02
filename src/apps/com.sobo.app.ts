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
    {
      key: 2,
      name: '全屏广告-广告弹窗',
      desc: '点击X',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.sobo.app.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout <2 FrameLayout[childCount=4] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3ed9ad25-083f-4d69-b944-360a6bc2233f',
          snapshotUrls: 'https://i.gkd.li/import/14133546',
        },
      ],
    },
  ],
});
