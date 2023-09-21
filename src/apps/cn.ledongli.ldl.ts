import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ledongli.ldl',
  name: '乐动力',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.ledongli.ldl.adsdk.activity.AdsOriginalActivity',
      rules: 'TextView[text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12668468',
    },
  ],
});
