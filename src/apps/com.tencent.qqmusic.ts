import { matches } from 'lodash';
import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          activityIds: [
            'com.tencent.qqmusic.activity.AppStarterActivity',
            'com.tencent.qqmusic.business.splash.thirdpartsplash.tme.union.SplashDialog',
            'com.miui.home.launcher.Launcher',
          ],
          matches: 'TextView[text=`跳过`][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673960', // text="互动广告"
            'https://gkd-kit.gitee.io/import/12674023', // text="互动广告 | "
            'https://gkd-kit.gitee.io/import/12673998', // text="广告"
            'https://gkd-kit.gitee.io/import/12674074', // text="运营推广"
          ],
        },
      ],
    },
    {
      key: 1,
      name: '推荐页-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        '@LinearLayout[clickable=true] > TextView[text="广告"] + ImageView', // 1688045698846
        'TextView[text="广告 | 关闭"][clickable=true]',
      ],
    },
  ],
});
