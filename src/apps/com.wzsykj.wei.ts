import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wzsykj.wei', // VersionName:1.7.8.8
  name: '微音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.zhouyu.music.activities.MainActivity',
          matches: 'ViewGroup[childCount=5] > ViewGroup[index=2] > ViewGroup',
          exampleUrls:
            'https://m.gkd.li/57941037/223a7872-d80b-44c9-865a-8d9b4cb9684e',
          snapshotUrls: 'https://i.gkd.li/import/14155635',
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: 'com.zhouyu.music.activities.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[index=2][childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/14190190',
        },
      ],
    },
  ],
});
