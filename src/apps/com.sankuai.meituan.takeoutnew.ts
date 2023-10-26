import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.sankuai.meituan.takeoutnew.ui.page.boot.SplashAdActivity',
      rules: 'TextView[text*=`跳过`]',
    },
    {
      key: 1,
      name: '关闭更新弹窗',
      activityIds:
        'com.sankuai.waimai.business.page.homepage.widget.dialog.UpdateForceInstallDialog',
      rules: [
        '[id="com.sankuai.meituan.takeoutnew:id/wm_upgrade_force_cancel"]', // 1686969252896
      ],
    },
    {
      key: 2,
      name: '关闭美食广告弹窗',
      activityIds: 'com.sankuai.waimai.platform.mach.dialog.DynamicDialog',
      rules: [
        '@[desc="关闭"][clickable=true] > ImageView', // 1686969062508
      ],
    },
    {
      key: 3,
      name: '付款后广告弹窗',
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
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13175526',
        },
      ],
    },
  ],
});
