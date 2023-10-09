import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="cn.TuHu.android:id/rl_activity_welcome_jump"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12846408',
    },
  ],
});
