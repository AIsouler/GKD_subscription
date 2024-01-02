import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 1,
      name: '购买会员-弹窗广告',
      enable: false,
      quickFind: true,
      activityIds: 'com.youloft.icloser.view.dialog.VipRetainPacketDialog',
      rules: '[id="com.youloft.icloser:id/tv_later_buy"]',
      snapshotUrls: 'https://i.gkd.li/import/13067183',
    },
    {
      key: 2,
      name: '右下角悬浮窗小广告',
      quickFind: true,
      activityIds: 'com.youloft.icloser.activity.MainActivity',
      rules: '[id="com.youloft.icloser:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13164387',
    },
  ],
});
