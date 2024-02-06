import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13415044',
        'https://i.gkd.li/import/13276882',
      ],
    },
    {
      key: 2,
      name: '全屏广告-美食广告弹窗',
      activityIds: 'com.sankuai.waimai.platform.mach.dialog.DynamicDialog',
      rules: [
        '@[desc="关闭"][clickable=true] > ImageView', // 1686969062508
      ],
    },
    {
      key: 3,
      name: '全屏广告-付款后广告弹窗',
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
          name: '领取外卖神卷-点击底部【x】',
          matches:
            '@ImageView[clickable=true] - FrameLayout > FrameLayout > FrameLayout TextView[text="点我领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13175526',
        },
      ],
    },
  ],
});
