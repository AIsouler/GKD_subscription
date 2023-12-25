import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'app.podcast.cosmos',
  name: '小宇宙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'io.iftech.android.podcast.app.home.main.view.MainActivity',
      quickFind: true,
      rules: '[id="app.podcast.cosmos:id/tvSkip"]',
      snapshotUrls: 'https://i.gkd.li/import/12883661',
    },
  ],
});
