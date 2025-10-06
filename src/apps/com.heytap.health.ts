import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.health',
  name: 'OPPO 健康',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.settings.me.upgrade.UpgradeActivity',
          matches: [
            '[text="检测到新版本"][visibleToUser=true]',
            '[text="以后再说"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22657352',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.main.MainActivity',
          matches:
            '[vid="adapter_act_root_view"] > [vid="close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22657359',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-健康周报',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: ['[text="您的健康周报已生成"]', '[text="关闭"]'],
          snapshotUrls: 'https://i.gkd.li/i/22724032',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="image_operation"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/22724039',
        },
      ],
    },
  ],
});
