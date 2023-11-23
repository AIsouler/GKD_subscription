import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.MainFrameActivity'],
      rules: ['RelativeLayout > TextView[id!=null][text^="跳过"]'],
      snapshotUrls: ['https://i.gkd.li/import/12799632'],
    },
    {
      key: 1,
      name: '更新弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '首页优惠弹窗',
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      matchLauncher: true,
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout > @ImageView[id="com.xunmeng.pinduoduo:id/pdd"][text=null][clickable=true] + ImageView[id="com.xunmeng.pinduoduo:id/pdd"][text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642019',
        },
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642032',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
        },
        {
          key: 2,
          name: '下单后追加订单',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '红包弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642023'],
    },
    {
      enable: false,
      key: 5,
      name: '多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: ['[id=null][text="关闭弹窗"][clickable=true]'],
      snapshotUrls: ['https://i.gkd.li/import/12642053'],
    },
    {
      key: 6,
      name: '多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642058'],
    },
    {
      enable: false,
      key: 7,
      name: '多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12700615'],
    },
    {
      enable: false,
      key: 8,
      name: '商品详情页视频讲解窗口',
      activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
      rules: '[id="com.xunmeng.pinduoduo:id/iv_float_window_close"] > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      enable: false,
      key: 9,
      name: '多多视频每日自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      matchLauncher: true,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/import/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="明日继续来领"]'],
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[desc=\'返回\'] -3 ViewPager >19 TextView[text=\'正在直播\']',
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
      ],
    },
  ],
});
