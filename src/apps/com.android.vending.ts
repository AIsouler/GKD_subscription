import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '功能类-谷歌发送应用安全检查',
      desc: '点击不发送',
      rules: [
        {
          activityIds:
            'com.google.android.finsky.protectdialogs.activity.PlayProtectDialogsActivity',
          matches: '@View[clickable=true] > [text="不发送"]',
          snapshotUrls: 'https://i.gkd.li/import/14035144',
        },
      ],
    },
  ],
});
