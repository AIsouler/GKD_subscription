import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.campus.and',
  name: '天猫校园',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tmall.campus.and.main.MainActivity',
            'com.tmall.campus.bizwebview.ui.CampusWebActivity',
          ],
          matches: '[vid="close_btn" || vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/22399316',
            'https://i.gkd.li/i/22425649',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tmall.campus.scancode.activity.ToolsCaptureActivity',
            'com.tmall.campus.bizwebview.ui.CampusWebActivity',
          ],
          matches: '[vid="iv_close_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22558370',
            'https://i.gkd.li/i/22871032',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-打开应用自动点击扫一扫',
      desc: '仅开屏后触发一次',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tmall.campus.and.main.MainActivity',
          matches: '[vid="iv_top_scan"]',
          snapshotUrls: 'https://i.gkd.li/i/22871147',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            'com.tmall.campus.launcher.SplashActivity',
          ],
          matches: ['[text="获取通知权限"]', '[text="再想想"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23124558',
            'https://i.gkd.li/i/23254348',
          ],
        },
      ],
    },
  ],
});
