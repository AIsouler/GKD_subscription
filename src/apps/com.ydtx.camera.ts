import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ydtx.camera',
  name: '元道经纬相机',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/13234627',
            'https://i.gkd.li/import/import/13226708',
          ],
        },
      ],
    },
  ],
});
