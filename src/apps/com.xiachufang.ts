import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.xiachufang.startpage.ui.StartPageActivity'],
      rules: [
        {
          matches: '[id$="/tt_splash_skip_btn"]',
          snapshotUrls: ['https://gkd-kit.songe.li/import/12505985'],
        },
        {
          matches: '[id$="/start_page_count_down_tv"]',
          snapshotUrls: ['https://gkd-kit.songe.li/import/12506014'],
        },
        {
          matches: '[text$="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12506014',
            'https://gkd-kit.songe.li/import/12506041',
          ],
        },
      ],
    },
  ],
});
