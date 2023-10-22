import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.srcb.pmbank',
  name: '上海农商银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yitong.mobile.biz.launcher.app.SplashActivity',
      rules: '[id="com.srcb.pmbank:id/chronometer"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12740293',
    },
  ],
});
