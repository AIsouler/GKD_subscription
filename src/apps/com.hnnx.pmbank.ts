import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hnnx.pmbank',
  name: '河南农信',
  groups: [
    {
      key: 3,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yitong.mbank.app.android.activity.SplashActivity',
      rules:
        '[text="是否下载最新版客户端？"] <<n [id="android:id/parentPanel"] Button[text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13536762',
    },
  ],
});
