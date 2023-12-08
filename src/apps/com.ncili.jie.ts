import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ncili.jie',
  name: 'BT磁力下载器',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: ['[id="com.ncili.jie:id/skip_view2"]'],
          snapshotUrls: ['https://i.gkd.li/import/13544299'],
          exampleUrls: [
            'https://m.gkd.li/58279234/fdda12a5-3a0a-450e-947e-73b48c1667da',
          ],
        },
      ],
    },
  ],
});
