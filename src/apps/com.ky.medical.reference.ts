import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.ky.medical.reference:id/btn_go"][text^="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/12918049',
    },
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.ky.medical.reference.promotion.AdDialogActivity',
      rules: [
        {
          matches: '[id="com.ky.medical.reference:id/icClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12840924',
        },
      ],
    },
  ],
});
