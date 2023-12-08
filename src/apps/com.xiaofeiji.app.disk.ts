import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaofeiji.app.disk',
  name: '小飞机网盘',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          matches: ['[desc$="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/import/13554076'],
          exampleUrls: [
            'https://m.gkd.li/58279234/edf4bbb4-889e-48cb-b54b-f4bc0a2929fb',
          ],
        },
      ],
    },
  ],
});
