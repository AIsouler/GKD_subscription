import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
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
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序"]',
          snapshotUrls: 'https://i.gkd.li/i/13484117',
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
