import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tuying.kuimg.rjm',
  name: '热剧猫',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      activityIds: 'com.tuying.kuimg.rjm.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.tuying.kuimg.rjm:id/ksad_tk_view"] >n @ViewGroup[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13166088',
        },
        {
          key: 1,
          matches:
            '[id="com.tuying.kuimg.rjm:id/ksad_tk_view"] >n @ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13166086',
        },
      ],
    },
  ],
});
