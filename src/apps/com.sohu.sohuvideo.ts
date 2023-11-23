import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sohu.sohuvideo',
  name: '搜狐视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13435484',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sohu.sohuvideo.ui.homepage.MainActivity',
      rules:
        '@[id="com.sohu.sohuvideo:id/ivClose"] + LinearLayout [text="新版本上线啦"]',
      snapshotUrls: 'https://i.gkd.li/import/13435504',
    },
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sohu.sohuvideo.ui.homepage.MainActivity',
      rules:
        '@[id="com.sohu.sohuvideo:id/tv_ok"] -2 LinearLayout > [text="设置青少年模式"]',
      snapshotUrls: 'https://i.gkd.li/import/13448876',
    },
  ],
});
