import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lphtsccft',
  name: '涨乐财富通',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      activityIds: [
        'com.lphtsccft.zhangle.startup.SplashScreenActivity',
        'com.lphtsccft.zhangle.main.MainActivity',
      ],
      rules: '[id="com.lphtsccft:id/tv_never"][text="不再提醒"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12646899',
        'https://gkd-kit.gitee.io/import/12646925',
      ],
    },
  ],
});
