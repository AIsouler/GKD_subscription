import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12777070',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.blued.android.core.ui.TerminalActivity',
          matches:
            '[id="com.soft.blued:id/layout_native_ad"] +(1,2) [id="com.soft.blued:id/img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12777097',
            'https://i.gkd.li/import/13694950',
          ],
        },
      ],
    },
  ],
});
