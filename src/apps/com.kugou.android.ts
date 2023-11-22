import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'ImageView[desc="miniLogoView"] + View[clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12775410',
        'https://i.gkd.li/import/13426030',
      ],
    },
  ],
});
