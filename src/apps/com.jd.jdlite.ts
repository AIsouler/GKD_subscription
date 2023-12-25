import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.jd.jdlite.ad.ADActivity',
        'com.jd.jdlite.MainActivity',
      ],

      rules: '[desc="闪屏广告"] + [text$="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12727385',
        'https://i.gkd.li/import/13062972',
      ],
    },
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://i.gkd.li/import/12727396',
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules:
        '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/import/13062969',
    },
  ],
});
