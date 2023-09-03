import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kwai.videoeditor',
  name: `快影`,
  groups: [
    {
      key: 0,
      name: `开屏广告`,
      activityIds: `com.kwai.videoeditor.activity.splash.InnerVideoSplashActivity`,
      rules: [`Button[text="跳过"]`],
      snapshotUrls: `https://gkd-kit.gitee.io/import/38517192/d12c3b08-8233-4584-b2b9-595ebb4ce665`,
    },
  ],
});
