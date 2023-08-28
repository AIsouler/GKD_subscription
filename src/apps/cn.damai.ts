import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'cn.damai',
  groups: [
    {
      key: 0,
      name: `大麦-开屏广告`,
      activityIds: `cn.damai.launcher.splash.SplashMainActivity`,
      // https://gkd-kit.gitee.io/import/38517192/38859663-6f0c-48b1-9392-20ae937a8c9e
      rules: `[id="cn.damai:id/homepage_advert_pb"]`,
    },
  ],
};
