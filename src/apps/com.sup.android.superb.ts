import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text$="青少年模式"] + [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13796869',
    },
    {
      key: 5,
      name: '通知提示-请求开启通知权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启推送通知"] +2 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13691081',
    },
    {
      key: 6,
      name: '局部广告-右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sup.android.base.MainActivity',
      rules:
        'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13624220',
    },
    {
      key: 7,
      quickFind: true,
      name: '更新提示',
      desc: '点击我再想想',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/import/13858490',
        },
      ],
    },
    {
      key: 8,
      name: '评价提示',
      desc: '点击取消',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.sup.android.superb:id/a1i"]',
          snapshotUrls: 'https://i.gkd.li/import/14005608',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-集五福弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.sup.android.base.MainActivity',
          matches: '[id="com.sup.android.superb:id/afa"]',
          exampleUrls:
            'https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d',
          snapshotUrls: 'https://i.gkd.li/import/14151026',
        },
      ],
    },
  ],
});
