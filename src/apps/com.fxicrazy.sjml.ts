import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fxicrazy.sjml',
  name: '联掌门户',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          exampleUrls:
            'https://m.gkd.li/47232102/cb7a2c32-db59-47c4-af35-b70125b88bd2',
          snapshotUrls: 'https://i.gkd.li/import/13514356',
        },
      ],
    },
  ],
});
