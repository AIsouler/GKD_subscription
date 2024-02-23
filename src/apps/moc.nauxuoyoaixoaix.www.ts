import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[id$="tt_splash_skip_btn"] <<n [vid="adsFl"]',
          snapshotUrls: 'https://i.gkd.li/i/13476862',
        },
        {
          key: 1,
          matches: ['[vid="adsFl"]', '[text^="跳过"][text.length<=10]'],
          snapshotUrls: 'https://i.gkd.li/i/13625367',
        },
        {
          key: 2,
          matches:
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid="adsFl"]',
          snapshotUrls: 'https://i.gkd.li/i/13820450',
        },
      ],
    },
  ],
});
