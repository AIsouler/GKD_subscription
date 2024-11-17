import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lanlanys.app',
  name: '懒懒视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.view.BaseActivity',
          matches:
            '@ImageView[index=3][childCount=0][clickable=true][visibleToUser=true][text=null][id=null] <4 RelativeLayout[childCount=8] < RelativeLayout[childCount=1] < [parent=null]',
          exampleUrls: 'https://e.gkd.li/42ac7c76-362c-4f47-b4d8-ab9677246165',
          snapshotUrls: 'https://i.gkd.li/i/17632595',
        },
      ],
    },
  ],
});
