import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.duer.superapp',
  name: '小度',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13310527',
          exampleUrls:
            'https://github.com/gkd-kit/inspect/assets/38517192/5f6591b6-220e-4117-9cc1-b07375085f64',
        },
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12506571',
        },
      ],
    },
  ],
});
