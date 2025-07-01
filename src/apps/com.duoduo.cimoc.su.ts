import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duoduo.cimoc.su',
  name: '速映影院',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.duoduo.cimoc.su.MainActivity',
          matches:
            'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13999281',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-"我的"页面卡片广告',
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.duoduo.cimoc.su.MainActivity',
          matches:
            '@TextView[clickable=true] <2 View[childCount=2] -2 [visibleToUser=true][text="广告"] <<n [vid="ksad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13999283',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-卡片广告',
      desc: '关闭视频播放页、搜索页广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.duoduo.cimoc.su.MainActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13999284',
            'https://i.gkd.li/i/13999376',
          ],
        },
      ],
    },
  ],
});
