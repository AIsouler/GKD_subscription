import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '评价提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
          matches: [
            '[text="评分"][visibleToUser=true]',
            '[text="下次再说"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13258813',
            'https://i.gkd.li/i/21979253',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-后台运行',
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
      name: '全屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '活动弹窗',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
        },
        {
          key: 1,
          name: '表盘广告',
          activityIds: 'com.xiaomi.wearable.yrn.views.WearableRNActivity',
          matches: '@[clickable=true] > [desc="Close"]',
          snapshotUrls: 'https://i.gkd.li/i/23923968',
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
    {
      key: 5,
      name: '通知提示-公告栏',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches:
            '[vid="bannerAnnouncementView"] [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24099864',
        },
      ],
    },
    {
      key: 6,
      name: '权限提示-麦克风',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
          matches:
            '@[vid="close_instruction"][clickable=true] - [text^="鼾声梦话监测开关因麦克风未授权而关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/24229351',
        },
      ],
    },
  ],
});
