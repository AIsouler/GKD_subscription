import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.yonghui.hyd',
  name: '永辉生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          name: '好券即将过期弹窗',
          activityIds:
            'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
          matches: [
            '[id="cn.yonghui.hyd:id/advance" || id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"]',
            '[id="cn.yonghui.hyd:id/close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13414401',
            'https://i.gkd.li/i/13414444',
          ],
        },
      ],
    },
  ],
});
