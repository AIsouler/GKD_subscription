import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.tencent.qt.sns:id/tv_timer`][text$=`跳过`]',
    },
    {
      key: 1,
      name: '首页活动弹窗',
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
      name: '更新弹窗',
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
