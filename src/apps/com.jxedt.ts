import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jxedt',
  name: '驾校一点通',
  groups: [
    {
      key: 1,
      name: '首页广告',
      activityIds: ['com.jxedt.ui.activitys.GuideActivity'],
      rules: [
        {
          matches: '[id="com.jxedt:id/tv_guide_tiaoguo" || text*="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12605051',
            'https://gkd-kit.gitee.io/import/12605053',
            'https://gkd-kit.gitee.io/import/12605057',
          ],
        },
      ],
    },
  ],
});
