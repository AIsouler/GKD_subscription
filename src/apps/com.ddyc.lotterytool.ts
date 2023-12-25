import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13324556',
    },
    {
      enable: false,
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ddyc.lotterytool.module.main.MainActivity',
      rules:
        'ImageView - ImageButton[id="com.ddyc.lotterytool:id/arg"][text=null]',
      snapshotUrls: 'https://i.gkd.li/import/13324555',
    },
    {
      enable: false,
      key: 2,
      name: '请求推送通知弹窗',

      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13325888',
    },
  ],
});
