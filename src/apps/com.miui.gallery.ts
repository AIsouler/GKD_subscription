import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '功能类-删除时勾选[同时从云端删除]',
      rules: [
        {
          activityIds: 'com.miui.gallery.activity.InternalPhotoPageActivity',
          matches: '[text="同时从云端删除"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/15804289',
        },
      ],
    },
  ],
});
