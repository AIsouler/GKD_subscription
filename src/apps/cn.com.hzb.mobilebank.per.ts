import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.hzb.mobilebank.per',
  name: '杭州银行',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.com.hzb.mobilebank.per.MainActivity',
          matches:
            'Image[width<160 && height<160][childCount=0] < @View[clickable=true][childCount=1] <2 View[childCount=2] < View[index=parent.childCount.minus(1)][childCount=1] <n View[id="app"] <<3 [vid="h5_pc_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25150390', // 关闭前
            'https://i.gkd.li/i/25150391', // 关闭后
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-未登录时自动点击登录',
      desc: '仅限财富版',
      rules: [
        {
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'cn.com.hzb.mobilebank.per.MainActivity',
          matches: '@[clickable=true] > [text="立即登录>"]',
          snapshotUrls: 'https://i.gkd.li/i/25150391',
        },
      ],
    },
  ],
});
