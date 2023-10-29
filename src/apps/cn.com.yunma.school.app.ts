import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[text^="跳过"][text.length<=10]',
        '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/13175275',
        'https://gkd-kit.gitee.io/import/13177064',
        'https://gkd-kit.gitee.io/import/13179898',
      ],
    },
  ],
});
