import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.spdb.mobilebank.per.activity.MainActivity',
      rules:
        '[id="cn.com.spdb.mobilebank.per:id/splash_tb_time"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740308',
    },
  ],
});
