import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          forcedTime: 10000,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: '[vid="draw_dialog_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16118156',
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13042279',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches:
            'View[clickable=true] > @[text="关闭"] + [text="活动"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14033859',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: '[vid="dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13842492',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches:
            '@[text="关闭"] + [text="活动"] <<n [vid="browser_fragment_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14033859',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: '[vid="cn_bottom_sheet_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16118155',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: 'View[desc="立即查看"] +2 ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12914450',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: '[vid="iv_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15879126',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches:
            'FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] <<n [vid="layout_root"]',
          snapshotUrls: 'https://i.gkd.li/i/16024305',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: '[vid="home_task_action_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16024305',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[text="确认"] - [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13042207',
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[id="com.cainiao.wireless:id/gg_dialog_base_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13068573',
    },
    {
      key: 6,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] + [text="好评"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13692761',
        'https://i.gkd.li/i/14969859',
      ],
    },
    {
      key: 9,
      name: '功能类-询问[是否要查询包裹]弹窗',
      desc: '点击[立即查看]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: '@[text="立即查看"] < * - * >2 [text="您是否要查询包裹"]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb48e137-66c3-4777-b65e-8f4f6b3bc4ee',
          snapshotUrls: 'https://i.gkd.li/i/14913359',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-包裹页面-自动展开更多物流信息',
      desc: '点击[展开]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches:
            '@[clickable=true] > View[desc="展开"] <<n LinearLayout[vid="layout_root"]',
          snapshotUrls: 'https://i.gkd.li/i/15879126',
        },
      ],
    },
  ],
});
