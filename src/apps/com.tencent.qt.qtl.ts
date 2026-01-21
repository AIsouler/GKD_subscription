import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8e923c51-48e7-431c-abf8-e564761b772e',
          snapshotUrls: 'https://i.gkd.li/i/16568456',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.tencent.qt.module_appupdate.soft_update.impl.SoftUpdateConfirmActivity',
          matches: '[id="com.tencent.qt.qtl:id/btn_update_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13611286',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.zone.main.MainZoneHomeActivity',
          matches: '[vid="notice_close_pic"]',
          exampleUrls: 'https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049',
          snapshotUrls: 'https://i.gkd.li/i/16581606',
        },
      ],
    },
  ],
});
