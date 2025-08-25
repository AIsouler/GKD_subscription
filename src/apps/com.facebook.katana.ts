import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.facebook.katana',
  name: 'Facebook',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[查看翻译]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.FbMainTabActivity',
          matches:
            '@ViewGroup[clickable=true] > [visibleToUser=true][text="查看翻译"] <<n [id="android:id/list"]',
          exampleUrls: 'https://e.gkd.li/8801f1f5-ddcb-45b2-9f19-c82e9d1271f1',
          snapshotUrls: 'https://i.gkd.li/i/21955231',
        },
      ],
    },
  ],
});
