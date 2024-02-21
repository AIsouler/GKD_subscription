import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.xiaodesecond.mw',
  name: '喵物次元',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3 && childCount!=5] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/47a8c072-ee52-4e1e-a4bc-526643756d47',
          snapshotUrls: [
            'https://i.gkd.li/import/14353263',
            'https://i.gkd.li/import/14345580',
          ],
        },
      ],
    },
  ],
});
