import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oidalmn.donrv',
  name: '番喜视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '仅为全局开屏广告的单独补充',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout[index=parent.childCount.minus(1)] > ImageView[width>52 && width<64][height>52 && height<64][top>1000]',
          snapshotUrls: 'https://i.gkd.li/i/24377039', //v1.8.7 广告的x号在下半方屏幕的
          activityIds: '.MainActivity',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="top_close_button"] < ViewGroup[childCount=1] <n ViewGroup >(2,3) [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0e4b7af0-5708-4be7-b1e9-87b469d9cadb',
          snapshotUrls: [
            'https://i.gkd.li/i/24325415',
            'https://i.gkd.li/i/24325538',
          ],
        },
      ],
    },
  ],
});
