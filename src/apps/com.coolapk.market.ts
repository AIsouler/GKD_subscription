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
        'https://gkd-kit.gitee.io/import/12472612',
        'https://gkd-kit.gitee.io/import/12503773',
      ],
    },
    {
      key: 0,
      name: '卡片广告',
      desc: '点击卡片右上角按钮->免广告-点击不感兴趣->选择关闭原因-点击不感兴趣',
      activityIds: [
        'com.coolapk.market.view.main.MainActivity', // 缺少快照
        'com.coolapk.market.view.base.SimpleAlphaActivity', // 缺少快照
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          matches:
            '[id="com.coolapk.market:id/ad_time_view"||id="com.coolapk.market:id/top_text_view"||id="com.coolapk.market:id/ad_text_view"] + [id="com.coolapk.market:id/close_view"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12707506',
            'https://gkd-kit.gitee.io/import/12642094',
            'https://gkd-kit.gitee.io/import/12642148',
            'https://gkd-kit.gitee.io/import/12774771',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '去广告/免广告-点击不感兴趣',
          matches:
            'Button[text$="广告"] <n LinearLayout[childCount=2] > Button[text="不感兴趣"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12707509',
            'https://gkd-kit.gitee.io/import/12642132',
            'https://gkd-kit.gitee.io/import/12642155',
            'https://gkd-kit.gitee.io/import/12774753',
          ],
        },
        {
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          matches: [
            '@LinearLayout[clickable=true] > TextView[text="不感兴趣"][id$="id/tt_item_tv"]',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12472633',
            'https://gkd-kit.gitee.io/import/12655713',
            'https://gkd-kit.gitee.io/import/12660759',
            'https://gkd-kit.gitee.io/import/12706437',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '关闭升级弹窗',
      activityIds: 'com.coolapk.market.view.main.MainActivity',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12503762',
      rules: '[text=`立即更新`] - [text=`取消`]',
    },
    // key=2 曾经被使用,不可再用
  ],
});
