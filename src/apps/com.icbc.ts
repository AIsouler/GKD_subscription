import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.icbc.activity.main.MainActivity',
          matches: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
          snapshotUrls: 'https://i.gkd.li/i/13330431',
        },
      ],
    },
  ],
});
