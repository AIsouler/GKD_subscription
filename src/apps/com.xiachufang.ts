import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '开屏广告-1',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12505985',
        },
        {
          key: 1,
          name: '开屏广告-2',
          matches: '@FrameLayout > [text$="跳过"][text.length<=10]',
          quickFind: true,
          snapshotUrls: [
            'https://i.gkd.li/import/12506014',
            'https://i.gkd.li/import/12506041',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 1,
          name: '菜谱底部卡片广告-1',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13348710',
        },
        {
          key: 2,
          name: '菜谱底部卡片广告-2',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches:
            '[id="com.xiachufang:id/jad_feed_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13363079',
        },
        {
          key: 3,
          name: '菜谱底部卡片广告-1-弹出窗口',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13454534',
        },
        {
          key: 4,
          name: '菜谱底部卡片广告-3',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches:
            '[id="com.xiachufang:id/fl_container"] >6 [name="android.widget.ImageView" && width=32]',
          snapshotUrls: 'https://i.gkd.li/import/13484117',
        },
      ],
    },
    {
      key: 2,
      name: '厨房问卷',
      rules: [
        {
          key: 1,
          name: '厨房问卷',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches: '[text^="厨房问卷"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13363042',
        },
      ],
    },
  ],
});
