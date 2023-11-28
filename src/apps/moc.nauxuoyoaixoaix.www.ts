import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13476862',
    },
  ],
});
