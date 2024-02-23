import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < FrameLayout < [vid="splashAdContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/13926823',
        },
      ],
    },
  ],
});
