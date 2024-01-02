import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan',
  name: '美团',
  deprecatedKeys: [5, 6],
  groups: [
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
      name: '广告弹窗',
      rules: [
        {
          key: 0,
          name: '美团买菜-折扣弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12639717',
        },
        {
          key: 1,
          name: '美团买菜-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://i.gkd.li/import/12892626',
        },
        {
          key: 2,
          name: '美团买菜-支付成功后-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12646768',
        },
        {
          key: 3,
          name: '超市便利-广告弹窗',
          activityIds:
            'com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity',
          matches:
            'FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13694877',
        },
        {
          key: 4,
          name: '骑行卡-红包弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12739204',
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
      name: '请求开启通知权限弹窗',
      desc: '点击跳过',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches:
            '[id="com.sankuai.meituan:id/notify_open_hint_title"] +n [id="com.sankuai.meituan:id/later"]',
          snapshotUrls: 'https://i.gkd.li/import/13439134',
        },
      ],
    },
    {
      key: 9,
      name: '订单完成后的红包弹窗',
      desc: '直接关闭整个模块',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          action: 'back',
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '[id="com.sankuai.meituan:id/module_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13695703',
        },
      ],
    },
    {
      key: 10,
      name: '新人返场特惠',
      desc: '点击右上角返回',
      activityIds: 'com.meituan.android.base.knb.KNBWebViewActivity',
      matchTime: 10000,
      rules: '[id="shareNav"] > [text=""]',
      snapshotUrls: 'https://i.gkd.li/import/13800691',
    },
  ],
});
