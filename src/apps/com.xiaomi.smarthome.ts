import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '局部广告-卡片广告',
      rules: [
        {
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12639658',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示-设备固件升级提示弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text*="检测到"&&text*="升级"] < ViewGroup + ViewGroup > Button > [text = "取消"]',
          snapshotUrls: 'https://i.gkd.li/i/12639671',
        },
      ],
    },
  ],
});
