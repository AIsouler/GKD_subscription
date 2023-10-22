import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mm.android.lc.login.LCAdvertActivity',
      rules: '[id="com.mm.android.lc:id/advert_skip_view"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12774801',
    },
  ],
});
