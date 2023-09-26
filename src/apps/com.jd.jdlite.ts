import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jd.jdlite.ad.ADActivity',
      rules: '[desc="闪屏广告"] + [text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727385',
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727396',
    },
  ],
});
