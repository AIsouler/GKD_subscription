import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
    {
      key: 1,
      name: '功能类-自动签到',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/bb_checkin"]',
          snapshotUrls: 'https://i.gkd.li/i/13610321',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-右下角年度报告弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/close_float_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13759025',
        },
      ],
    },
  ],
});
