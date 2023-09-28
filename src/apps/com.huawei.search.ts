import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.search',
  name: '华为智慧搜索',
  groups: [
    {
      key: 0,
      name: '下拉搜索横幅广告',
      activityIds: ['com.huawei.search.HomeActivity'],
      rules: [
        {
          matches: '[id="com.huawei.search:id/iv_topic_close_in_image"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12667938',
            'https://gkd-kit.gitee.io/import/12745008',
          ],
        },
        {
          matches:
            'ViewGroup[id="com.huawei.search:id/unlike_flow_layout"] > TextView[text="直接关闭"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12745001'],
        },
      ],
    },
  ],
});
