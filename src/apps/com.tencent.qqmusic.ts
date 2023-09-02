import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.qqmusic',
  name: `QQ音乐`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.tencent.qqmusic.activity.AppStarterActivity',
        'com.tencent.qqmusic.business.splash.thirdpartsplash.tme.union.SplashDialog',
      ],
      rules: 'TextView[text=`跳过`][clickable=true]',
    },
    {
      key: 1,
      name: '推荐页-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        `@LinearLayout[clickable=true] > TextView[text='广告'] + ImageView`, // 1688045698846
        `TextView[text="广告 | 关闭"][clickable=true]`,
      ],
    },
  ],
};
