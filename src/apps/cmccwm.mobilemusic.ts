import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches:
            '[id="cmccwm.mobilemusic.libraries_feature:id/tv_title"][text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13448898',
        },
      ],
    },
  ],
});
