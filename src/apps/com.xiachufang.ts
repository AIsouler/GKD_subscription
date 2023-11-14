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
          key: 0,
          name: '菜谱底部卡片广告',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13348710',
        },
      ],
    },
  ],
});
