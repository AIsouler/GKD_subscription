import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.chinamobile.mcloud.client.ui.logo.LogoActivity',
      rules: '[id="com.chinamobile.mcloud:id/btn_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/12774830',
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.chinamobile.mcloud.client.ui.setting.UpgradeActivity',
      rules:
        '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
      snapshotUrls: 'https://i.gkd.li/import/12774833',
    },
  ],
});
