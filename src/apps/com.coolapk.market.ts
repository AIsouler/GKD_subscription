import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: [
        'com.coolapk.market.view.splash.SplashActivity',
        'com.coolapk.market.view.main.MainActivity',
      ],
      rules: '[id$=":id/tt_splash_skip_btn"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/38517192/4ba30986-55d4-4a94-b7e2-6cf7d9c6d66d',
        'https://gkd-kit.gitee.io/import/12503773',
      ],
    },
    {
      key: 0,
      name: '关闭卡片广告',
      desc: '点击卡片右上角按钮,然后点击关闭弹窗',
      activityIds: [
        'com.coolapk.market.view.main.MainActivity',
        'com.coolapk.market.view.base.SimpleAlphaActivity',
      ],
      rules: [
        {
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.dislike.ui',
            'com.coolapk.market.view.main.MainActivity',
            'com.coolapk.market.view.base.SimpleAlphaActivity',
            'com.coolapk.market.view.node.DynamicNodePageActivity',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/38517192/9badc07c-4da2-4066-8af5-d96a86a28315',
            'https://gkd-kit.gitee.io/import/12655713',
            'https://gkd-kit.gitee.io/import/12660759',
          ],
          matches: ['[id$="id/tt_item_tv"][text=`不感兴趣`]'],
        },
        'Button[text$="广告"] + Button[text="不感兴趣"]',
        '[id=`com.coolapk.market:id/close_view`]',
      ],
    },
    {
      key: 1,
      name: '关闭升级弹窗',
      activityIds: 'com.coolapk.market.view.main.MainActivity',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12503762',
      rules: '[text=`立即更新`] - [text=`取消`]',
    },
    {
      key: 2,
      name: '关闭卡片广告（旧版）',
      desc: '点击卡片右上角按钮,然后点击关闭弹窗',
      activityIds: [
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
        'com.bytedance.sdk.openadsdk.core.dislike.ui',
        'com.coolapk.market.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          preKeys: [1],
          name: '关闭广告-反馈理由',
          matches: '[text$="今日免广告"] + [text="不感兴趣"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642132',
            'https://gkd-kit.gitee.io/import/12642155',
          ],
        },
        {
          key: 1,
          matches: ['[id="com.coolapk.market:id/close_view"][desc="关闭"]'],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642094',
            'https://gkd-kit.gitee.io/import/12642148',
          ],
        },
      ],
    },
  ],
});
