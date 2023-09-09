import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.videogo.login.LoadingActivity'],
      rules: [
        {
          matches: '[id="com.videogo:id/ad_skip_tv"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12565356',
        },
      ],
    },
  ],
});
