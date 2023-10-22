import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.xiachufang.startpage.ui.StartPageActivity'],
      rules:
        '[id$="/tt_splash_skip_btn"||id$="/start_page_count_down_tv"||text$="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12505985',
        'https://i.gkd.li/import/12506014',
        'https://i.gkd.li/import/12506041',
      ],
    },
  ],
});
