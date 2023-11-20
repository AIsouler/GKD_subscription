import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.bbkmusic',
  name: 'i 音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.android.bbkmusic:id/launcher_page_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/import/13400275',
        },
      ],
    },
  ],
});
