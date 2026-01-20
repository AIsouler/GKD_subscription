import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.aurora_tec.downloader',
  name: '极光下载器',
  groups: [
    {
      key: 1,
      name: '全屏广告-系统公告',
      desc: '点击确定',
      rules: [
        {
          fastQuery: true,
          activityIds: '.HomeActivity',
          matches:
            '@[text="确定"][clickable=true] -2 [text="系统公告"] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24726084',
        },
      ],
    },
  ],
});
