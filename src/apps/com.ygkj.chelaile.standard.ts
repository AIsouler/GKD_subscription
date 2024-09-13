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
          fastQuery: true,
          activityIds: [
            'dev.xesam.chelaile.app.module.func.SplashActivity',
            'dev.xesam.chelaile.app.module.PanelHostActivity',
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
          matches:
            '@[vid="cll_all_pic_close_1"][visibleToUser=true] < FrameLayout +(1,2) LinearLayout[childCount=2] > [text$="广告"]',
          exampleUrls: 'https://e.gkd.li/7957cdea-6238-4a2b-94bf-8960544258bc',
          snapshotUrls: [
            'https://i.gkd.li/i/13062991',
            'https://i.gkd.li/i/13464325',
            'https://i.gkd.li/i/16987313',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'dev.xesam.chelaile.app.module.PanelHostActivity',
            'dev.xesam.chelaile.app.module.line.TimeTableActivity',
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
          matches:
            '[vid="cll_line_single_ad_close" || vid="cll_close" || vid="cll_card_single_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1',
          snapshotUrls: [
            'https://i.gkd.li/i/13625374',
            'https://i.gkd.li/i/16956570',
            'https://i.gkd.li/i/16987313',
            'https://i.gkd.li/i/16988894',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            'FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[childCount=1] > @ImageView[visibleToUser=true][childCount=0][text=null] <<n [vid="cll_line_detail_widgets_container"]',
          exampleUrls: 'https://e.gkd.li/5442e403-7934-4fbf-b837-71d4ed8581cb',
          snapshotUrls: 'https://i.gkd.li/i/16956583',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            '@[vid="close_ad_text_link_layout"][visibleToUser=true] - LinearLayout[childCount=2] > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/26c77ba0-8be5-4966-b806-3a566fee8413',
          snapshotUrls: 'https://i.gkd.li/i/16987313',
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
