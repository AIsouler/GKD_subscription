import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vphonegaga.titan',
  name: '光速虚拟机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13292910',
    },
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'com.vphonegaga.titan.MyNativeActivity1',
      rules: '@Image < View +2 [text="反馈"]',
      snapshotUrls: 'https://i.gkd.li/import/13292911',
    },
  ],
});
