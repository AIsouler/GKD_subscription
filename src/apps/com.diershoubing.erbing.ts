import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.diershoubing.erbing',
  name: '二柄',
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
          key: 0,
          matches: '@[id$="tt_splash_skip_btn"] <<n [vid="containerV"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13378853',
            'https://i.gkd.li/i/13546165',
          ],
        },
        {
          key: 1,
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13538207',
        },
        {
          key: 2,
          matches:
            '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="containerV"]',
          snapshotUrls: 'https://i.gkd.li/i/13857307',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告',
      quickFind: true,
      rules: [
        {
          key: 1,
          matches: '[id="com.diershoubing.erbing:id/mainV"] >n [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328',
          snapshotUrls: 'https://i.gkd.li/i/13868396',
        },
        {
          key: 2,
          preKeys: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13868401',
        },
      ],
    },
  ],
});
