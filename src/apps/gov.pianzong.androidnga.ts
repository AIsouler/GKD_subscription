import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'gov.pianzong.androidnga',
  name: `NGA玩家社区`,
  groups: [
    {
      key: 0,
      name: `开屏广告`,
      activityIds: `gov.pianzong.androidnga.activity.LoadingActivity`,
      rules: [`[id="gov.pianzong.androidnga:id/iv_tg_ad"]`],
      snapshotUrls: `https://gkd-kit.gitee.io/import/12476484`,
    },
    {
      key: 1,
      name: `首页-推荐-广告卡片`,
      activityIds: `com.donews.nga.activitys.MainActivity`,
      rules: [`[id="gov.pianzong.androidnga:id/iv_close_ad"]`],
      snapshotUrls: `https://gkd-kit.gitee.io/import/12482727`,
    },
  ],
});
