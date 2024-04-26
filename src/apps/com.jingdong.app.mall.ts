import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '局部广告-购物车页面砸金蛋',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14731003',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-悬浮广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642270',
            'https://i.gkd.li/i/12774910', // 使用 [desc!="返回"] 进行限定，防止在进入商品详情页时点击返回按钮
            'https://i.gkd.li/i/15110548', // 避免误触
          ],
        },
        {
          key: 1,
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13242002',
        },
        {
          key: 2,
          matches: '[desc="关闭浮层icon"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13165659',
            'https://i.gkd.li/i/12837870',
            'https://i.gkd.li/i/13072091',
            'https://i.gkd.li/i/12837870',
            'https://i.gkd.li/i/15077913', // 防止误触
          ],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-请求打开通知',
      desc: '点击关闭',
      quickFind: true,
      //matchTime: 10000, 该弹窗可能在多个页面出现
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * > [text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13917163',
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
          ],
        },
        {
          key: 1,
          matches: '@[clickable=true] + [text^="打开系统通知"]',
          snapshotUrls: 'https://i.gkd.li/i/12839865',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'FrameLayout > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13165721',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: [
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          matches: '[vid="webview"] + [vid="close"][desc="关闭页面"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218034',
            'https://i.gkd.li/i/14927060',
          ],
        },
        {
          key: 2,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '@[desc="关闭按钮"] <n * >n [desc="弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241883',
            'https://i.gkd.li/i/132599029',
          ],
        },
        {
          key: 3,
          quickFind: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: 'RelativeLayout > ImageView[desc="关闭页面"]',
          excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13258996',
            'https://i.gkd.li/i/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
          ],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-横幅广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13258973',
            'https://i.gkd.li/i/13258980',
            'https://i.gkd.li/i/13258981',
          ],
        },
        {
          key: 1,
          quickFind: true,
          matches: '@ViewGroup[clickable=true] - * > [text="去续费"]',
          snapshotUrls: 'https://i.gkd.li/i/15047238',
        },
        {
          key: 2,
          matches:
            '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15112953',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-京东账号登录授权',
      desc: '自动点击"确认登录"',
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/i/12901734',
    },
    {
      key: 11,
      name: '局部广告-支付页面产品推荐',
      desc: '自动点击右上角"x"',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13191146',
    },
    {
      key: 12,
      name: '全屏广告-购物车页面支付成功弹窗广告',
      desc: '自动点击正下方的"x"',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/i/13446362',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-加入购物车后出现的弹窗',
      desc: '点击[继续逛]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.jd.lib.productdetail.ProductDetailActivity',
          matches: '[text="继续逛"]',
          snapshotUrls: 'https://i.gkd.li/i/15047243',
        },
      ],
    },
  ],
});
