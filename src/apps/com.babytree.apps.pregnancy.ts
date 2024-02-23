import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '全屏广告-弹出广告(偶发)',
      activityIds: 'com.babytree.apps.pregnancy.activity.SailfishActivity',
      rules: [
        {
          matches:
            'ImageView[id="com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2"] + ImageView[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12614834',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页右侧悬浮广告(偶发)',
      activityIds: 'com.babytree.apps.pregnancy.activity.SailfishActivity',
      rules: [
        {
          matches:
            'ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12614838',
        },
      ],
    },
  ],
});
