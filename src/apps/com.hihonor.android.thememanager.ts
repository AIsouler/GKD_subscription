import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.android.thememanager',
  name: '主题',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f9821020-292c-454d-8e04-83ca73b38358',
          snapshotUrls: 'https://i.gkd.li/i/16573695',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.HwThemeManagerActivity',
          matches: '[vid="mtDialogClose"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7ceeb371-e7a5-4c94-8afd-d2c5b56744a6',
          snapshotUrls: 'https://i.gkd.li/i/17158049',
        },
      ],
    },
  ],
});
