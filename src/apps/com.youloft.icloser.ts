import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12910405',
            'https://i.gkd.li/import/13175102',
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13072365',
        },
      ],
    },
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
