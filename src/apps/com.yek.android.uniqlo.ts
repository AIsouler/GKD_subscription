import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yek.android.uniqlo',
  name: '优衣库',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.yek.android.uniqlo.uiux.Home.activity.HomeActivity',
      rules: 'ImageView[id="com.yek.android.uniqlo:id/pop_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13212320',
    },
    {
      key: 2,
      name: '新版本弹窗',
      desc: '点击取消',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.yek.android.uniqlo.activity.WelcomeActivity',
          matches: '@TextView[text="取消"] + TextView[text="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13446421',
        },
      ],
    },
  ],
});
