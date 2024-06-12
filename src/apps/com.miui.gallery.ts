import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '勾选云端删除',
      desc: '自动勾选同时从云端',
      rules: [
        {
          activityIds: 'com.miui.gallery.activity.InternalPhotoPageActivity',
          matches: '[id="android:id/checkbox"]',
          exampleUrls: 'https://m.gkd.li/152465495/c51ed769-9376-4cd9-9d56-de8f1cf5af6a',
          snapshotUrls: 'https://i.gkd.li/i/15804289',
        },
      ],
    },
  ],
});