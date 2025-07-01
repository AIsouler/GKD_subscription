import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.animad',
  name: '動畫瘋',
  groups: [
    {
      key: 1,
      name: '其他-动画疯年龄限制',
      desc: '点击同意',
      rules: [
        {
          fastQuery: true,
          activityIds: 'tw.com.gamer.android.animad.VideoActivity',
          matches:
            '[id="tw.com.gamer.android.animad:id/agree_button"][text="同意"]',
          snapshotUrls: 'https://i.gkd.li/i/13808757',
        },
      ],
    },
  ],
});
