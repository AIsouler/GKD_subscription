import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'chuxin.shimo.shimowendang',
  name: '石墨文档',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'chuxin.shimo.shimowendang.launchad.mediatom.MediatomActivity',
        'chuxin.shimo.shimowendang.MainActivity',
      ],
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12894158', // chuxin.shimo.shimowendang.launchad.mediatom.MediatomActivity
        'https://i.gkd.li/import/12894163', // chuxin.shimo.shimowendang.MainActivity
      ],
    },
  ],
});
