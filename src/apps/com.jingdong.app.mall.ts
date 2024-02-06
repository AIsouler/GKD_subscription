import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  deprecatedKeys: [7],
  groups: [
    {
      enable: false,
      key: 1,
      name: '局部广告-购物车页面砸金蛋',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12642266',
    },
    {
      enable: false,
      key: 2,
      name: '局部广告-我的页面悬浮广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
            'https://i.gkd.li/import/12774910', // 使用 [desc!="返回"] 进行限定，防止在进入商品详情页时点击返回按钮
          ],
        },
        {
          key: 1,
          name: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '局部广告-首页右侧浮层广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'RelativeLayout >n * > [desc^="关闭浮层"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13165659',
        'https://i.gkd.li/import/12837870',
        'https://i.gkd.li/import/13072091',
        'https://i.gkd.li/import/12837870',
      ],
    },
    {
      enable: false,
      key: 4,
      name: '通知提示-请求打开通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches: 'TextView[text="开启消息通知"] +n ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864', //com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew
            'https://i.gkd.li/import/13772299', //com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity
            'https://i.gkd.li/import/13917163', //com.jingdong.app.mall.MainFrameActivity
          ],
        },
        {
          matches:
            'TextView[text ^="打开系统通知"] - FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12839865',
        },
        {
          quickFind: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[id="com.jingdong.app.mall:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13463618',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'FrameLayout > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13165721',
        },
        {
          key: 1,
          activityIds:
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
          matches:
            '[id="com.jingdong.app.mall:id/webview"] + [id="com.jingdong.app.mall:id/close"][desc="关闭页面"]',
          snapshotUrls: 'https://i.gkd.li/import/13218034',
        },
        {
          key: 2,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '@[desc="关闭按钮"] <n * >n *[desc="弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13241883',
            'https://i.gkd.li/import/132599029',
          ],
        },
        {
          key: 3,
          quickFind: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'RelativeLayout > ImageView[desc="关闭页面"]',
          excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258996',
            'https://i.gkd.li/import/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
          ],
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '局部广告-首页底部横幅广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13258973',
        'https://i.gkd.li/import/13258980',
        'https://i.gkd.li/import/13258981',
      ],
    },
    {
      enable: false,
      key: 10,
      name: '功能类-京东账号登录授权',
      desc: '自动点击"确认登录"',
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
    },
    {
      enable: false,
      key: 11,
      name: '局部广告-支付页面产品推荐',
      desc: '自动点击右上角"x"',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      enable: false,
      key: 12,
      name: '全屏广告-购物车页面支付成功广告弹窗',
      desc: '自动点击正下方的"x"',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
  ],
});
