import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.jsmcc.ui.MainActivityGroupNew'],
      rules: [
        {
          matches:
            '[id="com.jsmcc:id/ad_content"] [text^="跳过"][text.length<=3]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12830488',
            'https://gkd-kit.gitee.io/import/12830580',
          ],
        },
      ],
    },
  ],
});
