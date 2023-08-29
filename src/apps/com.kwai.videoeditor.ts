import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.kwai.videoeditor',
  groups: [
    {
      key: 0,
      name: `快影-开屏广告`,
      activityIds: `com.kwai.videoeditor.activity.splash.InnerVideoSplashActivity`,
      // https://gkd-kit.gitee.io/import/38517192/d12c3b08-8233-4584-b2b9-595ebb4ce665
      rules: [`Button[text="跳过"]`],
    },
  ],
};
