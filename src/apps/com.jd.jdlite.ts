import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://i.gkd.li/i/12727396',
    },
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/i/13062969',
    },
  ],
});
