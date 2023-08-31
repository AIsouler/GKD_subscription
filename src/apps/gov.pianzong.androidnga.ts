import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'gov.pianzong.androidnga',
  groups: [
    {
      key: 0,
      name: `NGA玩家社区-开屏广告`,
      activityIds: `gov.pianzong.androidnga.activity.LoadingActivity`,
      // https://gkd-kit.gitee.io/import/12476484
      rules: [`[id="gov.pianzong.androidnga:id/iv_tg_ad"]`],
    },
    {
      key: 1,
      name: `NGA玩家社区-首页-推荐-广告卡片`,
      activityIds: `com.donews.nga.activitys.MainActivity`,
      // https://gkd-kit.gitee.io/import/12482727
      rules: [`[id="gov.pianzong.androidnga:id/iv_close_ad"]`],
    },
  ],
};
