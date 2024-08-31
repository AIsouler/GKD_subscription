import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'dev.xesam.chelaile.app.module.func.SplashActivity',
            'dev.xesam.chelaile.app.module.PanelHostActivity',
          ],
          matches:
            'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13062991',
            'https://i.gkd.li/i/13062984',
            'https://i.gkd.li/i/13464325',
          ],
        },
        {
          key: 1,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '[id="com.ygkj.chelaile.standard:id/cll_line_single_ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13625374',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            '[id="com.ygkj.chelaile.standard:id/cll_interstitial_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/31613a9d-202a-4359-bc99-274dddb180ce',
          snapshotUrls: 'https://i.gkd.li/i/14325666',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            'RelativeLayout[childCount=6] > RelativeLayout[childCount=4] + ImageView[clickable=true][index=3][text=null]',
          exampleUrls: 'https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1',
          snapshotUrls: 'https://i.gkd.li/i/16812335',
        },
      ],
    },
  ],
});
