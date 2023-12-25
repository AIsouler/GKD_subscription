import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.dcloud.H55BDF6BE',
  name: '甬派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'io.dcloud.H55BDF6BE.activity.FullADSActivity',

      rules: '[id="io.dcloud.H55BDF6BE:id/tv_time"][text$="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13031273',
    },
  ],
});
