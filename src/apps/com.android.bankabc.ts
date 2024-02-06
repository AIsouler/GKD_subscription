import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.android.bankabc:id/close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9',
          snapshotUrls: 'https://i.gkd.li/import/14179162',
        },
        {
          key: 1,
          actionCdKey: 0,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
  ],
});
