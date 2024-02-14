import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '局部广告-卡片广告',
      activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: ['https://i.gkd.li/import/12639658'],
        },
      ],
    },
    {
      enable: false,
      key: 1,
      name: '更新提示-设备固件升级提示弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: 'https://i.gkd.li/import/12639671',
      rules:
        '[text*="检测到"&&text*="升级"] < ViewGroup + ViewGroup > Button > [text = "取消"]',
    },
  ],
});
