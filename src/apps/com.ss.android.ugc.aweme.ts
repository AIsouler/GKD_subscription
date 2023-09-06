import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '关闭青少年弹窗',
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
    {
      key: 1,
      name: '关闭用户推荐',
      rules: [
        {
          activityIds:
            'com.google.android.material.bottomsheet.BottomSheetDialog',
          matches:
            '[id="com.ss.android.ugc.aweme:id/desc"][text="减少此类推荐"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12520962',
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[text="换一个"] - FrameLayout[clickable=true] > ImageView[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12520943',
        },
      ],
    },
    {
      key: 2,
      activityIds: [
        'com.ss.android.ugc.aweme.main.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      name: '关闭朋友推荐弹窗',
      rules: '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme:id/close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12525387',
        'https://gkd-kit.gitee.io/import/12525389',
      ],
    },
    {
      key: 3,
      name: '关闭更新弹窗',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="以后再说"] +2 [text="立即升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12534016',
    },
  ],
});
