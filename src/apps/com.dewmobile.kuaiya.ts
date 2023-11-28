import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dewmobile.kuaiya',
  name: '快牙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13477047',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.dewmobile.kuaiya.act.MainActivity',
          matches:
            'ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13477048',
        },
      ],
    },
  ],
});
