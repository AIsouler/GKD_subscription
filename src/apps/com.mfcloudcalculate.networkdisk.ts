import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"] >n [text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/import/12846434',
            'https://i.gkd.li/import/13059834',
          ],
        },
        {
          key: 1,
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13259303',
            'https://i.gkd.li/import/13695497',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      quickFind: true,
      rules:
        '[text*="关闭"][id="com.mfcloudcalculate.networkdisk:id/tv_ad_free_colse"]',
      snapshotUrls: 'https://i.gkd.li/import/13546173',
    },
  ],
});
