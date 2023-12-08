import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bwton.tjmetro',
  name: '天津地铁',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.bwton.tjmetro:id/time"][text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13608504',
    },
  ],
});
