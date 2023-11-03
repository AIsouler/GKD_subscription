import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules:
        '@RelativeLayout[desc="跳过"][id!=null] > TextView[text="跳过"][id!=null]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12668289',
        'https://gkd-kit.gitee.io/import/12519430',
      ],
    },
    {
      enable: false,
      key: 1,
      name: '购物车界面-砸金蛋',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642266',
    },
    {
      enable: false,
      key: 2,
      name: '我的界面-悬浮广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          desc: '参与调研',
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642270',
            'https://i.gkd.li/import/12774910', // 使用 [desc!="返回"] 进行限定，防止在进入商品详情页时点击返回按钮
          ],
        },
        {
          key: 1,
          desc: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '首页-浮层广告',
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
      name: '消息-打开通知',
      activityIds:
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
      rules: [
        {
          matches: 'TextView[text="开启消息通知"] +n ImageView[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12839864',
        },
        {
          matches:
            'TextView[text ^="打开系统通知"] - FrameLayout[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12839865',
        },
      ],
    },
    {
      key: 5,
      name: '广告弹窗',
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
          matches: '[desc="弹窗"] + [desc="关闭按钮"]',
          snapshotUrls: 'https://i.gkd.li/import/13241883',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '京东账号登录授权',
      desc: '自动点击【确认登录】',
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12901734',
    },
    {
      enable: false,
      key: 11,
      name: '支付界面-产品推荐',
      desc: '自动点击右上角【x】',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13191146',
    },
  ],
});
