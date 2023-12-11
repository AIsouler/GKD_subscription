import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jarworld.bleach.bvn.sjm.cyc',
  name: '次元城动漫',
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
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13626948',
            'https://i.gkd.li/import/13626951',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jarworld.bleach.bvn.sjm.cyc.MainActivity',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13626949',
        },
        {
          matches:
            '[id="com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13626950',
        },
      ],
    },
  ],
});
