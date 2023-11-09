import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      rules: [
        {
          activityIds: [
            'com.babytree.apps.pregnancy.video.splash.SplashVideoTransitionActivity',
          ],
          matches: 'TextView[text="跳过"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/import/12614757',
        },
        {
          activityIds: ['com.babytree.apps.pregnancy.MainActivity'],
          matches:
            '[name$="FrameLayout"||name$="ViewGroup"] > TextView[text^="跳过"][clickable=true][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12614755',
            'https://i.gkd.li/import/import/12737138',
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
          snapshotUrls: 'https://i.gkd.li/import/import/12614834',
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
          snapshotUrls: 'https://i.gkd.li/import/import/12614838',
        },
      ],
    },
  ],
});
