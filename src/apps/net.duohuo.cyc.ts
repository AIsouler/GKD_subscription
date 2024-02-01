import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.duohuo.cyc',
  name: '次元城动画',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches:
            '[id="net.duohuo.cyc:id/ksad_tk_view"] >4 ViewGroup[index=1] >3 ViewGroup[index=0][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/13972796',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'top.cycdm.cycapp.MainActivity',
          matches: '@ViewGroup[childCount=4] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13972792',
        },
      ],
    },
  ],
});
