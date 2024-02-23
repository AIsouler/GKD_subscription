import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      activityIds: 'com.tongcheng.android.TongchengMainActivity',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13167070',
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@* > * > [id="com.tongcheng.android:id/tv_home_banner_pop_up"][text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13167149',
        },
      ],
    },
  ],
});
