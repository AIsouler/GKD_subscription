import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lenovo.club.app',
  name: '联想',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12829678',
    },
    {
      key: 2,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.lenovo.club.app.AdActivity',
      rules:
        '[id="com.lenovo.club.app:id/tv_title"][text="发现新版本"] < LinearLayout [text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13498778',
    },
  ],
});
