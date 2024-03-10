import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hd.smartVillage',
  name: '恒大智慧社区',
  groups: [
    {
      key: 1,
      name: '通知提示-关闭开启通知弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'View[id="com.hd.smartVillage:id/notificationSettingCloseBtn"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13223669', //com.hd.smartVillage.modules.main.MainActivity
        'https://i.gkd.li/i/13293000', //com.hd.smartVillage.modules.h5service.H5WebActivity
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[id="com.hd.smartVillage:id/tv_upgrade_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13223642',
    },
  ],
});
