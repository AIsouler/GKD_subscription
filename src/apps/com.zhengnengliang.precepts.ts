import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.zhengnengliang.precepts.ui.activity.MainActivity',
            'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
          ],
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <(2,3) FrameLayout[childCount=4] +(1,2) FrameLayout[childCount=2] >2 [text^="立即" || text="去逛逛"]',
          exampleUrls: 'https://e.gkd.li/9b352715-611f-4fa3-a66e-cf9203dddf75',
          snapshotUrls: [
            'https://i.gkd.li/i/12739767',
            'https://i.gkd.li/i/12727705',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/5813656b-8d39-4c14-b459-038fa41366a3',
          snapshotUrls: 'https://i.gkd.li/i/14338307',
        },
      ],
    },
  ],
});
