import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lphtsccft',
  name: '涨乐财富通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.lphtsccft.zhangle.startup.SplashScreenActivity'],
      rules: '[id="com.lphtsccft:id/countdown_skip"][text="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/12699286'],
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: [
        'com.lphtsccft.zhangle.startup.SplashScreenActivity',
        'com.lphtsccft.zhangle.main.MainActivity',
      ],
      rules: '[id="com.lphtsccft:id/tv_never"][text="不再提醒"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12646899',
        'https://i.gkd.li/import/12646925',
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      activityIds: 'com.lphtsccft.zhangle.main.MainActivity',
      rules: '[text*="升级体验"] +2 LinearLayout > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12699308',
    },
    {
      key: 3,
      name: '右侧悬浮广告',
      activityIds: 'com.lphtsccft.zhangle.main.MainActivity',
      rules: '[id="com.lphtsccft:id/home_float_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12892821',
    },
  ],
});
