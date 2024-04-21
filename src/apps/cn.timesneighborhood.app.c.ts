import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.timesneighborhood.app.c',
  name: '邻里邦',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zkty.modules.engine.activity.XEngineWebActivity',
          matches: '[text="立即签到"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e02dac87-41dc-45eb-bf7e-8daa0b69f517',
          snapshotUrls: 'https://i.gkd.li/i/14545251',
        },
      ],
    },
  ],
});
