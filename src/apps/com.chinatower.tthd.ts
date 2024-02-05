import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinatower.tthd',
  name: '铁塔换电',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinatower.fghd.customer.home.HomeNewActivity',
          quickFind: true,
          matches:
            '[id="com.chinatower.tthd:id/fl_content_container"] + [id="com.chinatower.tthd:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13694901',
        },
      ],
    },
  ],
});
