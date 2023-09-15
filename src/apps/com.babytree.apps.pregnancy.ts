import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.babytree.apps.pregnancy.video.splash.SplashVideoTransitionActivity',
        'com.babytree.apps.pregnancy.MainActivity',
      ],
      rules: [
        {
          matches:
            'ImageView[id!=null] + TextView[clickable=true][text^="跳过"][text.length<=4][id!=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12614755',
            'https://gkd-kit.gitee.io/import/12614757',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹出广告(偶发)',
      activityIds: 'com.babytree.apps.pregnancy.activity.SailfishActivity',
      rules: [
        {
          matches:
            'ImageView[id="com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2"] + ImageView[id!=null][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12614834',
        },
      ],
    },
    {
      key: 3,
      name: '首页右侧悬浮广告(偶发)',
      activityIds: 'com.babytree.apps.pregnancy.activity.SailfishActivity',
      rules: [
        {
          matches:
            'ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12614838',
        },
      ],
    },
  ],
});
