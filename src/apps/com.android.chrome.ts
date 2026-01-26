import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.chrome',
  name: 'Chrome',
  groups: [
    {
      key: 1,
      name: '功能类-文件可能有害-点击[仍然下载]',
      desc: '警告⚠️：会跳过有害文件警告，请谨慎开启',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
          matches: [
            '[text="文件可能有害"][visibleToUser=true]',
            '[text="仍然下载"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/7fd28568-a614-4dea-8928-56a20c5780b6',
          snapshotUrls: 'https://i.gkd.li/i/24863365',
        },
      ],
    },
  ],
});
