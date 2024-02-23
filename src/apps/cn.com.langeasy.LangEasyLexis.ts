import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
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
      enable: false,
      name: '功能类-右下角年度报告弹窗',
      desc: '点击关闭',
      quickFind: true,
      matchTime: 10000,
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
