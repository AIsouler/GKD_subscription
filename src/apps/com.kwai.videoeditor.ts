import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'air.tv.douyu.android',
  groups: [
    {
      key: 0,
      name: `快影-开屏广告`,
      activityIds: `com.kwai.videoeditor.activity.splash.InnerVideoSplashActivity`,
      rules: [`Button[text="跳过"]`],
    },
  ],
};
