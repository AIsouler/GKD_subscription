import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.dcloud.H55BDF6BE',
  name: '甬派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'io.dcloud.H55BDF6BE.activity.FullADSActivity',
      matchLauncher: true,
      rules: '[id="io.dcloud.H55BDF6BE:id/tv_time"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13031273',
    },
  ],
});
