import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fcbox.hivebox',
  name: '丰巢管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[clickable=true] > [text$="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13458968',
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '首页弹窗广告',
          activityIds: 'com.fcbox.hivebox.business.main.MainActivity',
          quickFind: true,
          matches:
            '[id="com.fcbox.hivebox:id/fl_content_container"] + [id="com.fcbox.hivebox:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13459000',
        },
      ],
    },
  ],
});
