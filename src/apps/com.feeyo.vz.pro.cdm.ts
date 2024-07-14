import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13926823',
        },
      ],
    },
  ],
});
