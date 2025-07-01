import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lphtsccft',
  name: '涨乐财富通',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.lphtsccft.zhangle.startup.SplashScreenActivity',
            'com.lphtsccft.zhangle.main.MainActivity',
          ],
          matches: '[id="com.lphtsccft:id/tv_never"][text="不再提醒"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12646899',
            'https://i.gkd.li/i/12646925',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.zhangle.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text*="升级体验"] +2 LinearLayout > [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/12699308',
        },
        {
          key: 1,
          matches: '[vid="iv_update_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16760030',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-右侧悬浮广告',
      rules: [
        {
          activityIds: 'com.lphtsccft.zhangle.main.MainActivity',
          matches: '[id="com.lphtsccft:id/home_float_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12892821',
        },
      ],
    },
  ],
});
