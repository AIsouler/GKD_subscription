import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.leixun.taofen8',
  name: '淘粉吧',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches:
            '@View[clickable=true] <<n [id="com.leixun.taofen8:id/fl_advert_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13937324',
        },
      ],
    },
  ],
});
