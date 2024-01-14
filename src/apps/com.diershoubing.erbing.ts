import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.diershoubing.erbing',
  name: '二柄',
  groups: [
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
          snapshotUrls: 'https://i.gkd.li/import/13868396',
        },
        {
          key: 2,
          preKeys: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13868401',
        },
      ],
    },
  ],
});
