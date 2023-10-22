import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.zone.main.MainZoneHomeActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.tencent.qt.qtl:id/skip_layout"] > [text$="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12793273',
        'https://i.gkd.li/import/12893534', // com.miui.home.launcher.Launcher
      ],
    },
  ],
});
