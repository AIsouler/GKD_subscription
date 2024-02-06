import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12889448',
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      quickFind: true,
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12889450',
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.dw.btime.base_library.dialog.DWBaseDialog',
      rules:
        'TextView[text="立即更新"] -3 [id="com.dw.btime:id/iv_upgrade_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12911011',
    },
  ],
});
