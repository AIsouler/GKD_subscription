import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '自动点击关闭。',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.web.stage.StageCommonWebActivity',
          matches: '[text="去开启"] + View > Image[text.length=0]',
          snapshotUrls: 'https://i.gkd.li/i/13458535',
        },
      ],
    },
  ],
});
