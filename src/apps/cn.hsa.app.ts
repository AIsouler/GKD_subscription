import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.hsa.app',
  name: '国家医保服务平台',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.hsa.app.login.ui.OpeningPageActivity',
      rules: '[id="cn.hsa.app:id/tvCountDown"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12839891',
    },
  ],
});
