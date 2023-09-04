import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.karaoke.module.splash.ui.SplashAdDialog',
      rules: '[text*=`跳过`][id!=null]',
    },
  ],
});
