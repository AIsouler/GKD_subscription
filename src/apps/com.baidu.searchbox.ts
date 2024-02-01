import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.searchbox',
  name: '百度',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: '[text^="看视频"] -2 ImageView[index=4]',
          snapshotUrls: 'https://i.gkd.li/import/13806848',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches:
            '[id="android:id/content"] >2 LinearLayout[childCount=2] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/import/13988536',
        },
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: 'ViewGroup[childCount=7] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/import/14034223',
        },
      ],
    },
  ],
});
