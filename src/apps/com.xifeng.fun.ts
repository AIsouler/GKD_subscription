import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xifeng.fun',
  name: 'OmoFun',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xifeng.fun.MainActivity',
          matches: 'FrameLayout[childCount=6] >2 ImageView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/14050836',
        },
      ],
    },
  ],
});
