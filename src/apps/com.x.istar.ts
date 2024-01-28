import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.x.istar',
  name: '观星',
  groups: [
    {
      key: 1,
      name: '全屏广告-开屏广告弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.x.istar.view.main.MainActivity',
      rules: '[text="关闭广告"][vid="btn_negative"]',
      snapshotUrls: 'https://i.gkd.li/import/13974606',
    },
  ],
});
