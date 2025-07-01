import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '评价提示-好评弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
          matches: '[id="com.mi.health:id/nextView"][text="下次再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13258813',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-权限提醒',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13495035',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-活动弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="下载并安装" || text="立即更新"]',
            '[text="放弃更新" || text="取消"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13537840',
            'https://i.gkd.li/i/13626328',
          ],
        },
      ],
    },
  ],
});
