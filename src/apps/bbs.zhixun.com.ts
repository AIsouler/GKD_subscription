import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bbs.zhixun.com',
  name: '智讯社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'io.dcloud.PandoraEntryActivity',
      matchLauncher: true,
      rules: '[id="bbs.zhixun.com:id/ad_dcloud_main_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13188572',
    },
  ],
});
