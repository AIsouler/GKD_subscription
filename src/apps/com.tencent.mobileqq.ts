import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.mobileqq',
  name: `QQ`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '[text*=`跳过`]',
    },
    {
      key: 1,
      name: `消息页面-顶部广告`,
      activityIds: `com.tencent.mobileqq.activity.SplashActivity`,
      rules: [
        `ImageView[id!=null][desc='关闭'][clickable=true]`, // 1687669217838
      ],
    },
    {
      key: 2,
      name: `好友动态-广告卡片`,
      rules: [
        {
          activityIds: `com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog`,
          matches: `[clickable=true] > ImageView + TextView[text="关闭此条广告"]`, // 1689050230463
        },
        {
          activityIds: `com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity`,
          matches: `View[desc="广告"] + ImageView[clickable=true]`, // 1689050226722
        },
      ],
    },
  ],
};
