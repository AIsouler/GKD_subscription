import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16323111',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
        {
          key: 1,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17602356', // "跳过" 节点不支持fastQuery
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-购物车页面砸金蛋',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
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
            'https://i.gkd.li/i/12774910',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/15110548',
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
      name: '权限提示-通知权限',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.message.messagecenter',
          ],
          matches:
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13917163',
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
            'https://i.gkd.li/i/18060234',
          ],
        },
        {
          key: 1,
          activityIds: 'com.jd.lib.message.messagecenter',
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
          matches: '@FrameLayout[clickable=true] > [desc="关闭"]',
          excludeMatches:
            '[text="确定" || text="加入购物车" || text*="购买" || text*="下单"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13165721',
            'https://i.gkd.li/i/15364514',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18455760', //避免在activityIds为null时误触
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          matches: '[vid="close"][desc="关闭页面"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218034',
            'https://i.gkd.li/i/14927060',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.jingdong.app.mall.MainFrameActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          excludeMatches: [
            'ImageView[desc="关闭页面"] - [text="优惠券"]',
            'TextView[text="退换/售后"][id=null]',
            '[text="立即购买"][visibleToUser=true]',
          ],
          matches:
            '[desc="关闭页面" || desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241883',
            'https://i.gkd.li/i/13258996',
            'https://i.gkd.li/i/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
            'https://i.gkd.li/i/15416926',
            'https://i.gkd.li/i/15862131',
            'https://i.gkd.li/i/16818580', // 增加excludeMatches: 'TextView[text="退换/售后"]', 避免在刚刚打开该快照页面时误触（此时activityId并未改变）
            'https://i.gkd.li/i/24170046', // 增加excludeMatches: '[text="立即购买"][visibleToUser=true]', 避免在该快照误触
          ],
        },
        {
          key: 3,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'back',
          activityIds: '.MainFrameActivity',
          matches: '[text^="惊喜福利来袭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/580d3cb5-503e-47a9-ba88-056e91c2f084',
          snapshotUrls: 'https://i.gkd.li/i/17974166',
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
          fastQuery: true,
          matches: '@ViewGroup[clickable=true] - * > [text="去续费"]',
          snapshotUrls: 'https://i.gkd.li/i/15047238',
        },
        {
          key: 2,
          matches:
            '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15112953',
        },
        {
          key: 3,
          fastQuery: true,
          matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15229577',
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
      fastQuery: true,
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
          fastQuery: true,
          activityIds: 'com.jd.lib.productdetail.ProductDetailActivity',
          matches: '[text="继续逛"]',
          snapshotUrls: 'https://i.gkd.li/i/15047243',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-支付订单后点击[完成]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            '.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          matches: '[vid="lib_cashier_finish_back_page_text"]',
          exampleUrls: 'https://e.gkd.li/ab886df0-2b34-4804-be7d-742a06fadda9',
          snapshotUrls: 'https://i.gkd.li/i/17358003',
        },
      ],
    },
    {
      key: 15,
      name: '功能类-支付订单后跳过开通[刷脸支付]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
          action: 'back',
          matches: '[text="开启刷脸支付"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bad5489e-0ec6-4039-8e4e-52b4b444f019',
          snapshotUrls: 'https://i.gkd.li/i/20709175',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-展开全部订单信息',
      desc: '订单已完成-点击全部订单信息',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          fastQuery: true,
          // activityIds: [],
          matches: '[text="全部订单信息"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e1a3b6f7-b6cb-4379-90b5-cb4b927dacc4',
          snapshotUrls: 'https://i.gkd.li/i/24372039',
        },
      ],
    },
  ],
});
