import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 10,
      name: '其他-进入飞行模式-提示弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches:
            '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12750185',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-首页右侧悬浮广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches:
            '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
          snapshotUrls: 'https://i.gkd.li/i/12783264',
        },
      ],
    },
  ],
});
