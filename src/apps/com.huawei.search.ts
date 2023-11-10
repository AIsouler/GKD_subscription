import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.search',
  name: '智慧搜索',
  groups: [
    {
      key: 0,
      name: '下拉搜索横幅广告',
      activityIds: [
        'com.huawei.search.HomeActivity',
        'com.huawei.search.MainActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.huawei.search:id/iv_topic_close_in_image"||id="com.huawei.search:id/iv_topic_left_close"||id="com.huawei.search:id/iv_topic_close_in_pps"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12667938',
            'https://i.gkd.li/import/12745008',
            'https://i.gkd.li/import/12841076',
            'https://i.gkd.li/import/13266095', // iv_topic_close_in_pps
          ],
        },
        {
          matches:
            'ViewGroup[id="com.huawei.search:id/unlike_flow_layout"] > TextView[text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12745001'],
        },
      ],
    },
  ],
});
