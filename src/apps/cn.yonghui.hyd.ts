import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.yonghui.hyd',
  name: '永辉生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13414432',
    },
    {
      key: 1,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          name: '领券中心-红包弹窗',
          activityIds:
            'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
          matches:
            '[id="cn.yonghui.hyd:id/advance"] +n [id="cn.yonghui.hyd:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13414401',
        },
        {
          key: 1,
          name: '好券即将过期弹窗',
          activityIds:
            'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
          matches:
            '[id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"] +n [id="cn.yonghui.hyd:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13414444',
        },
      ],
    },
  ],
});
