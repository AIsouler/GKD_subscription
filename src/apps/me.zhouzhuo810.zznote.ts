import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.zhouzhuo810.zznote',
  name: '小周便签',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[id="me.zhouzhuo810.zznote:id/btn_next_2"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b20641b8-e7c6-44d6-82b4-5e501e8a491d',
          snapshotUrls: 'https://i.gkd.li/i/12798528',
        },
        {
          key: 1,
          quickFind: true,
          matches: '@LinearLayout > [text*="跳过"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c23cca9b-b4fa-4533-9a1d-4bb4bc9e4b86',
          snapshotUrls: 'https://i.gkd.li/i/13800235',
        },
      ],
    },
  ],
});
