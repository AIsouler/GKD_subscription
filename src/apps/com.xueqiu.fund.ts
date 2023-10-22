import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xueqiu.fund',
  name: '雪球基金',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xueqiu.fund.commonlib.SplashActivity',
      rules: '[id="com.xueqiu.fund:id/tv_exit"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12776572',
    },
  ],
});
