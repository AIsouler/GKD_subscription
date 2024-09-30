import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules:
        'TextView[text^="新版本"] - Button[id="com.sankuai.meituan:id/btn_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12614559',
        'https://i.gkd.li/i/12673132',
        'https://i.gkd.li/i/13292635',
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '美团买菜-折扣弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12639717',
        },
        {
          key: 1,
          name: '美团买菜-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://i.gkd.li/i/12892626',
        },
        {
          key: 2,
          name: '美团买菜-支付成功后-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12646768',
        },
        {
          key: 3,
          name: '超市便利-弹窗广告',
          activityIds:
            'com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity',
          matches:
            'FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13694877',
        },
        {
          key: 4,
          name: '骑行卡-红包弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12739204',
        },
        {
          key: 5,
          name: '订单完成后的红包弹窗',
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '@ImageView[clickable=true] - * >3 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13695703',
        },
        {
          key: 6,
          name: '邀请好友提现弹窗',
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            'WebView > View > View[childCount=1] >(1,2) View[childCount=2] > View + Image[text=""][childCount=0][left>0]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964911',
            'https://i.gkd.li/i/15400951',
            'https://i.gkd.li/i/16487898', // 避免误触 add [left>0]
          ],
        },
      ],
    },
    {
      key: 3,
      name: '评价提示-订单调查弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
        {
          name: '我的页面-小调查',
          action: 'back',
          matches: 'TextView[text="小调查"]',
          snapshotUrls: 'https://i.gkd.li/i/12639723',
        },
        {
          name: '订单详情页匿名调查',
          action: 'back',
          matches: '[id="com.sankuai.meituan:id/questionnaireTitle"]',
          snapshotUrls: 'https://i.gkd.li/i/13682336',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.meituan.android.pt.homepage.activity.MainActivity',
            'com.miui.home.launcher.Launcher',
          ],
          matches: 'FrameLayout > @ImageView + ImageView[desc="资质与规则"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12639815',
            'https://i.gkd.li/i/12639734',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
          matches: '[vid="marking_sidebar_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16079638',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches: '@ImageView[visibleToUser=true] - [text^="收藏店铺领"]',
          exampleUrls: 'https://e.gkd.li/20bbae61-859b-478d-9032-8213c79dec39',
          snapshotUrls: 'https://i.gkd.li/i/16632959',
        },
      ],
    },
    {
      key: 7,
      name: '权限提示-定位权限',
      desc: '首页/外卖界面-"打开位置开关弹窗"-点击右侧x关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches: '[vid="location_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/da856996-b128-486a-a6d4-964183b0c719',
          snapshotUrls: 'https://i.gkd.li/i/14472663',
        },
        {
          key: 1,
          activityIds:
            'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
          matches: '[id="com.sankuai.meituan:id/location_layer_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3071d3a4-f8ca-4c6f-8aa2-cf9573dbed3d',
          snapshotUrls: 'https://i.gkd.li/i/12910211',
        },
        {
          key: 2,
          activityIds: 'com.sankuai.meituan.MPMainActivity',
          matches: '[text="定位服务尚未开启"] +3 TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/3bb08a42-5d88-4f9d-8cbe-cb913e136ec6',
          snapshotUrls: 'https://i.gkd.li/i/14472614',
        },
      ],
    },
    {
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击跳过',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[vid="iv_close" || text="跳过"] <n * > [text^="开启通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13439134',
            'https://i.gkd.li/i/15047918',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-新人返场特惠',
      desc: '点击右上角返回',
      activityIds: 'com.meituan.android.base.knb.KNBWebViewActivity',
      matchTime: 10000,
      rules: '[id="shareNav"] > [text=""]',
      snapshotUrls: 'https://i.gkd.li/i/13800691',
    },
    {
      key: 11,
      name: '全屏广告-视频页弹窗广告',
      desc: '点击X',
      rules: [
        {
          key: 0,
          name: '签到弹窗',
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches: 'ViewGroup[childCount=17] > ImageView[index=5]',
          snapshotUrls: 'https://i.gkd.li/i/14033982',
        },
        {
          key: 1,
          name: '看视频领现金弹窗',
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] - ViewGroup[childCount=3] [text="看视频继续领现金"]',
          snapshotUrls: 'https://i.gkd.li/i/14034073',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-付款后自动点击完成',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.sankuai.waimai.platform.machpro.container.WMMPActivity',
          matches: [
            '[text="商家已接单" || text="等待商家接单"][visibleToUser=true]',
            '[text="完成"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14163717',
            'https://i.gkd.li/i/17158063',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '[text="支付成功"] >5 @[clickable=true][text="完成"] <<n [vid="mil_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14392284',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-直播讲解悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="正在讲解"]',
          exampleUrls: 'https://e.gkd.li/42b1d2c5-ca75-4a89-adca-9e5c4f489165',
          snapshotUrls: 'https://i.gkd.li/i/17182888',
        },
      ],
    },
  ],
});
