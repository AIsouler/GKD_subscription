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
  ],
};
