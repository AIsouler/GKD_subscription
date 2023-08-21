import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.mobileqq',
  groups: [
    {
      key: 0,
      name: 'QQ-开屏广告',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '[text*=`跳过`]',
    },
    {
      key: 1,
      name: `QQ-消息页面-顶部广告`,
      activityIds: `com.tencent.mobileqq.activity.SplashActivity`,
      rules: [
        `ImageView[id!=null][desc='关闭'][isClickable=true]`, // 1687669217838
      ],
    },
    {
      key: 2,
      name: `QQ-好友动态-广告卡片`,
      rules: [
        {
          activityIds: `com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog`,
          matches: `[isClickable=true] > ImageView + TextView[text="关闭此条广告"]`, // 1689050230463
        },
        {
          activityIds: `com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity`,
          matches: `View[desc="广告"] + ImageView[isClickable=true]`, // 1689050226722
        },
      ],
    },
  ],
};
