import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
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
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/13926823',
        },
      ],
    },
  ],
});
