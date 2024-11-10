import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nowcasting.activity',
  name: '彩云天气',
  groups: [
    {
      key: 1,
      name: '全屏广告-VIP弹窗广告',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          matches:
            '[text="开心收下"] + [id="com.nowcasting.activity:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13405130',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13405131',
            'https://i.gkd.li/i/14814345',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <5 ViewGroup + ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14814374',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="entrance_image"] + [vid="close"]',
          exampleUrls: 'https://e.gkd.li/bd53a023-f83a-45ae-b58e-c7369f29bb2e',
          snapshotUrls: 'https://i.gkd.li/i/16965108',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 1,
          matches: '[id="com.nowcasting.activity:id/ll_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13690822',
        },
        {
          preKeys: 1,
          key: 2,
          matches: '[id="com.nowcasting.activity:id/ll_uninterested"]',
          snapshotUrls: 'https://i.gkd.li/i/13690830',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.nowcasting.activity.WeatherActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.nowcasting.activity:id/jad_feed_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13690826',
        },
        {
          key: 1,
          matches:
            '@FrameLayout[visibleToUser=true] +2 * > [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14814348',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-点击收起顶部工具栏',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.nowcasting.activity.WeatherActivity',
          matches:
            'ViewGroup[childCount=2][visibleToUser=true] > [vid="fl_arrow"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/5bdf4f45-d66d-441e-a2ce-f32d5fc40796',
          snapshotUrls: [
            'https://i.gkd.li/i/14814347', // 收起前
            'https://i.gkd.li/i/14814412', // 收起后
          ],
        },
      ],
    },
  ],
});
