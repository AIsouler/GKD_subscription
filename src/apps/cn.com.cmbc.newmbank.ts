import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.cmbc.newmbank',
  name: '民生银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.cmbc.newmbank.activity.WelComeActivity',
      rules: '[id="cn.com.cmbc.newmbank:id/view_count_down"]',
      snapshotUrls: 'https://i.gkd.li/import/12774842',
    },
  ],
});
