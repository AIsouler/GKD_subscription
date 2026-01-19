import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.facebook.katana',
  name: 'Facebook',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击[查看翻译]',
      fastQuery: true,
      activityIds: [
        '.activity.FbMainTabActivity',
        '.immersiveactivity.ImmersiveActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            '@ViewGroup[clickable=true] > [visibleToUser=true][text="查看翻译"] <<n [id="android:id/list"]',
          exampleUrls: 'https://e.gkd.li/8801f1f5-ddcb-45b2-9f19-c82e9d1271f1',
          snapshotUrls: 'https://i.gkd.li/i/21955231',
        },
        {
          key: 2,
          matches:
            '@[text="查看翻译"][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24712867',
        },
      ],
    },
  ],
});
