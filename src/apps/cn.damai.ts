import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.damai',
  name: `大麦`,
  groups: [
    {
      key: 0,
      name: `开屏广告`,
      activityIds: `cn.damai.launcher.splash.SplashMainActivity`,
      rules: `[id="cn.damai:id/homepage_advert_pb"]`,
      snapshotUrls: `https://gkd-kit.gitee.io/import/38517192/38859663-6f0c-48b1-9392-20ae937a8c9e`,
    },
  ],
});
