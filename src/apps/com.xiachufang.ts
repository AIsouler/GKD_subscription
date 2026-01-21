import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
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
          matches: '[vid="skip_container"][visibleToUser=true]', // https://github.com/AIsouler/GKD_subscription/issues/749
          exampleUrls: 'https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5',
          snapshotUrls: 'https://i.gkd.li/i/18587428',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([visibleToUser=true][text*="跳过"][text.length<10][width<500 && height<200])',
          exampleUrls: 'https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad',
          snapshotUrls: [
            'https://i.gkd.li/i/19724959', // 无法快速查询
            'https://i.gkd.li/i/19724417',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13348710',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches:
            '[id="com.xiachufang:id/jad_feed_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13363079',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13454534',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13484117',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.activity.recipe.RecipeDetailActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout[childCount=2] > LinearLayout[childCount=2] > [text^="立即"]',
          exampleUrls: 'https://e.gkd.li/f9b63d84-3363-4330-93b9-156d6f3d3d32',
          snapshotUrls: 'https://i.gkd.li/i/18249193',
        },
      ],
    },
    {
      key: 2,
      name: '其他-厨房问卷',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches: '@[desc="关闭"] - [text^="厨房问卷"]',
          snapshotUrls: 'https://i.gkd.li/i/13363042',
        },
      ],
    },
  ],
});
