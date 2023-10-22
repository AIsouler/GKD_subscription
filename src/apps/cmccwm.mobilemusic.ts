import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cmccwm.mobilemusic.ui.SplashActivity',
      rules: '[id = "cmccwm.mobilemusic.base_runtime:id/bt_skip_ad"]',
      snapshotUrls: 'https://i.gkd.li/import/12852498',
    },
  ],
});
