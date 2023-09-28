import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.hkgt.gasapp',
  name: '易捷加油',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.hkgt.gasapp.activity.start.BannerActivity',
      rules: '[id="cn.com.hkgt.gasapp:id/mCountDownTextView"][text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12740125',
    },
  ],
});
