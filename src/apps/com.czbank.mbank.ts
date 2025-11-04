import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.czbank.mbank',
  name: '浙商银行',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mixhome.MainMarsMixAct',
          matches: '[vid="ad_close_btn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5c4f7917-8d01-419e-ac77-3d1fb27a9613',
          snapshotUrls: 'https://i.gkd.li/i/23324592',
        },
      ],
    },
  ],
});
