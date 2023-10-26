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
      name: '我的界面-参与调研',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules:
        'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc!="返回"][visibleToUser=true]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642270',
        'https://i.gkd.li/import/12774910', // 使用 [desc!="返回"] 进行限定，防止在进入商品详情页时点击返回按钮
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
      enable: false,
      key: 5,
      name: '首页-弹窗广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: 'FrameLayout > [desc="关闭"]',
      snapshotUrls: ['https://i.gkd.li/import/13165721'],
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
  ],
});
