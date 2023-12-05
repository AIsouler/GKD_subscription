import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ants360.yicamera',
  name: '小蚁摄像机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13426833',
    },
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          name: '腾讯SDK',
          matches:
            'FrameLayout[childCount=3] + FrameLayout[childCount=1][index=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13463241',
        },
        {
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <<n FrameLayout[id="com.ants360.yicamera:id/ksad_tk_view"] ',
          snapshotUrls: 'https://i.gkd.li/import/13543175',
        },
      ],
    },
  ],
});
