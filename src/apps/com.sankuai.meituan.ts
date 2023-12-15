import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'TextView[id="com.sankuai.meituan:id/close_btn"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12749811',
    },
    {
      key: 1,
      name: '更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.meituan.android.upgrade.ui.',
        'com.meituan.android.upgrade.UpgradeDialogActivity',
        'com.meituan.android.pt.homepage.activity.MainActivity',
      ],
      rules:
        'TextView[text^="新版本"] - Button[id="com.sankuai.meituan:id/btn_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12614559',
        'https://i.gkd.li/import/12673132',
        'https://i.gkd.li/import/13292635', //com.meituan.android.pt.homepage.activity.MainActivity
      ],
    },
    {
      key: 2,
      name: '美团买菜活动弹窗',
      activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup > ViewGroup[childCount=6] > ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12639717',
        },
        {
          key: 1,
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://i.gkd.li/import/12892626',
        },
      ],
    },
    {
      key: 3,
      name: '订单调查弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      rules: [
        {
          name: '我的页面-小调查',
          action: 'back',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches: 'TextView[text="小调查"]',
          snapshotUrls: 'https://i.gkd.li/import/12639723',
        },
        {
          name: '订单详情页匿名调查',
          action: 'back',
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '[id="com.sankuai.meituan:id/questionnaireTitle"]',
          snapshotUrls: 'https://i.gkd.li/import/13682336',
        },
      ],
    },
    {
      key: 4,
      name: '首页右侧抽奖小广告',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: 'FrameLayout > @ImageView + ImageView[desc="资质与规则"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12639815',
        'https://i.gkd.li/import/12639734',
      ],
    },
    {
      key: 5,
      name: '美团买菜-支付成功后-红包弹窗',
      desc: '美团买菜-支付成功后-关闭红包弹窗',
      activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
      rules: 'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12646768',
    },
    {
      key: 6,
      name: '美团骑行-广告、优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '骑行卡福利大派送弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12739204',
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '请求定位弹窗',
      desc: '首页/外卖界面-【打开位置开关弹窗】-点击右侧x关闭',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
      ],
      rules: [
        '[id ="com.sankuai.meituan:id/location_close"]',
        '[id ="com.sankuai.meituan:id/location_layer_close"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12874657',
        'https://i.gkd.li/import/12910210',
        'https://i.gkd.li/import/12910211',
      ],
    },
    {
      enable: false,
      key: 8,
      name: '通知弹窗',
      desc: '点击跳过',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches: 'TextView[id=\'com.sankuai.meituan:id/later\']',
          snapshotUrls: 'https://i.gkd.li/import/13439134',
        },
      ],
    },
  ],
});
