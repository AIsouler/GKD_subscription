import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.gamehelper.ui.main.WelcomeActivity',
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
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      matchDelay: 10000,
      rules:
        '@[id="com.tencent.qt.sns:id/btnNegative"][text*="取消"] +2 [id="com.tencent.qt.sns:id/btnPositive"][text*="现在升级"]', //防止误触其它取消按钮
      snapshotUrls: 'https://i.gkd.li/import/13497984',
    },
  ],
});
