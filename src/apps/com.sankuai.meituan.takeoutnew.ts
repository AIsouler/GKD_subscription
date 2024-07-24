import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13415044',
        'https://i.gkd.li/i/13276882',
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds:
        'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
      rules: [
        {
          key: 0,
          name: '美团买药弹窗-点击[暂时放弃]',
          matches:
            '[text="送亲友"] <2 FrameLayout[childCount=2] > [text="暂时放弃"][clickable=true]',
        },
        {
          key: 1,
          name: '领取外卖神卷-点击底部"x"',
          matches:
            '@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text="点我领取"]',
          snapshotUrls: 'https://i.gkd.li/i/13175526',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-直播悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="正在讲解"]',
          exampleUrls: 'https://e.gkd.li/d7119268-6710-4bf4-a46c-eaefa4105791',
          snapshotUrls: 'https://i.gkd.li/i/16359035',
        },
      ],
    },
  ],
});
