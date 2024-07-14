import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ants360.yicamera',
  name: '小蚁摄像机',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          name: '腾讯SDK',
          matches:
            'FrameLayout[childCount=3] + FrameLayout[childCount=1][index=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13463241',
        },
        {
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <<n FrameLayout[id="com.ants360.yicamera:id/ksad_tk_view"] ',
          snapshotUrls: 'https://i.gkd.li/i/13543175',
        },
      ],
    },
  ],
});
