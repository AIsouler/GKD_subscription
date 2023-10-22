import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xueqiu.android',
  name: '雪球',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xueqiu.android.community.FakeAdActivity',
      rules: '[id="com.xueqiu.android:id/tv_skip"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12776009',
    },
  ],
});
