import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tim',
  name: 'TIM',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
          matches: '[text^="查看原图"]',
          exampleUrls:
            'https://m.gkd.li/57941037/894c5e7b-aab1-452c-a2a7-67a605506c89',
          snapshotUrls: 'https://i.gkd.li/i/15197486',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-发送图片时自动勾选[原图]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@[checked=false] + [text="原图"]',
          exampleUrls:
            'https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60',
          snapshotUrls: 'https://i.gkd.li/i/15209768',
        },
      ],
    },
  ],
});
