import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youbao.app',
  name: '邮宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.youbao.app:id/start_skip_count_down"]',
          snapshotUrls: 'https://i.gkd.li/import/13331338', // issues/2062 issuer说不用等倒计时结束
        },
      ],
    },
  ],
});
