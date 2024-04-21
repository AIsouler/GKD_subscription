import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.yonghui.hyd',
  name: '永辉生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          name: '领券中心-红包弹窗',
          activityIds:
            'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
          matches:
            '[id="cn.yonghui.hyd:id/advance"] +n [id="cn.yonghui.hyd:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13414401',
        },
        {
          key: 1,
          name: '好券即将过期弹窗',
          activityIds:
            'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
          matches:
            '[id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"] +n [id="cn.yonghui.hyd:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13414444',
        },
      ],
    },
  ],
});
