import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      matchTime: 10000,
      rules: '[id="com.tencent.qt.sns:id/closebtn"]',
      snapshotUrls: 'https://i.gkd.li/import/13497978',
    },
    {
      key: 2,
      enable: false,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="版本更新"] +4 LinearLayout > [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13497984',
        'https://i.gkd.li/import/13713478',
      ],
    },
  ],
});
