import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.chaozh.iReader.ui.activity.WelcomeActivity'],
      rules: [
        {
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/import/13175317',
        },
        {
          matches: 'View[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13190313',
        },
      ],
    },
  ],
});
