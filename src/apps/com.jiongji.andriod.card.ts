import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13495409',
    },
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.baicizhan.main.activity.MainTabActivity',
      rules:
        '[text="反馈"] + ImageView + ImageView[childCount=0][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13415075',
    },
    {
      key: 3,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.baicizhan.main.activity.MainTabActivity',
      rules: '[text="抢先体验"] - [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13488652',
    },
  ],
});
