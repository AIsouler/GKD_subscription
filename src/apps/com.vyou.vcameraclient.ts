import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vyou.vcameraclient',
  name: '盯盯拍',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/6328439/5b974f9d-a7bf-46fa-9ba3-57df81aca131',
          snapshotUrls: 'https://i.gkd.li/import/13347076',
        },
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13042916',
            'https://i.gkd.li/import/13042963',
          ],
        },
      ],
    },
  ],
});
