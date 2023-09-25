import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.gyyx.phonekey',
  name: '光宇游戏',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.gyyx.phonekey.ui.dialog.AdDialog',
      rules: '[id=`cn.gyyx.phonekey:id/rl_ad_pass`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12712285',
    },
  ],
});
