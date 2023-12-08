import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.guodongbaohe.app',
  name: '果冻宝盒',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: '[text*="跳过"][id="com.guodongbaohe.app:id/time"]',
      snapshotUrls: 'https://i.gkd.li/import/13543323',
    },
    // key0-5作为开屏、更新、消息提醒等通用规则
    {
      enable: false,
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.guodongbaohe.app.activity.AdvertisementTwoActivity',
      rules: 'LinearLayout[id="com.guodongbaohe.app:id/close_dialog_lv"]',
      snapshotUrls: 'https://i.gkd.li/import/13577877',
    },
  ],
});
