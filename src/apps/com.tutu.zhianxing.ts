import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tutu.zhianxing',
  name: '智安星',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.xlxapp.MainActivity'],
      rules: '[id="com.tutu.zhianxing:id/skip_title"]',
      snapshotUrls: 'https://i.gkd.li/import/12847474',
    },
  ],
});
