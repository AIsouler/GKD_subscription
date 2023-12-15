import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.iflytek.inputmethod',
  name: '讯飞输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上方跳过按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/12906597',
        },
        {
          actionMaximumKey: 0,
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13054922',
            'https://i.gkd.li/import/13635665',
          ],
        },
      ],
    },
  ],
});
