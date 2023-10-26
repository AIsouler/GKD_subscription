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
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: [
        '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
      ],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12642017'],
    },
    {
      enable: false,
      key: 2,
      name: '首页优惠弹窗',
      activityIds: [
        'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        'FrameLayout > FrameLayout > RelativeLayout > @ImageView[id="com.xunmeng.pinduoduo:id/pdd"][text=null][clickable=true] + ImageView[id="com.xunmeng.pinduoduo:id/pdd"][text=null][clickable=true]',
        'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642015',
        'https://gkd-kit.gitee.io/import/12642019',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '免单活动弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: [
        'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
        'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642032',
        'https://gkd-kit.gitee.io/import/12642038',
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
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12642023'],
    },
    {
      enable: false,
      key: 5,
      name: '多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: ['[id=null][text="关闭弹窗"][clickable=true]'],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12642053'],
    },
    {
      key: 6,
      name: '多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12642058'],
    },
    {
      enable: false,
      key: 7,
      name: '多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
      ],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12700615'],
    },
    {
      enable: false,
      key: 8,
      name: '商品详情页视频讲解窗口',
      activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
      rules: '[id="com.xunmeng.pinduoduo:id/iv_float_window_close"] > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
  ],
});
