import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12614757',
        },
        {
          key: 1,
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount=5] > FrameLayout > RelativeLayout > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15566228',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
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
      name: '局部广告-首页右侧悬浮广告',
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
