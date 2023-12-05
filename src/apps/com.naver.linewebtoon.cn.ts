import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.naver.linewebtoon.cn',
  name: '咚漫漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13407119',
        },
        {
          key: 1,
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13546265',
        },
      ],
    },
  ],
});
