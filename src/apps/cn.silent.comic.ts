import { defineAppConfig } from '../types';
export default defineAppConfig({
  id: 'cn.silent.comic',
  name: '免漫',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="cn.silent.comic:id/ksad_splash_circle_skip_view"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/f7c54df0-30d8-405a-b7eb-dd06c8db11cf',
            'https://m.gkd.li/83610194/94a8ecb5-1124-4090-a1ce-11340a4a76f2',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13405442',
            'https://i.gkd.li/import/13405483',
          ],
        },
        {
          matches: '[id="cn.silent.comic:id/ad_dcloud_main_skip"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/94a8ecb5-1124-4090-a1ce-11340a4a76f2',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13421452'],
        },
      ],
    },
  ],
});
