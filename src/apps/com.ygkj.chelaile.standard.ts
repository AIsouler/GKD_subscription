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
          excludeMatches: '[text="选择下车站"][visibleToUser=true]',
          matches:
            '[vid="cll_line_single_ad_close" || vid="cll_close" || vid="cll_card_single_ad_close"][visibleToUser=true][width<110 && height<110]',
          exampleUrls: 'https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1',
          snapshotUrls: [
            'https://i.gkd.li/i/13625374',
            'https://i.gkd.li/i/16956570',
            'https://i.gkd.li/i/16987313',
            'https://i.gkd.li/i/16988894',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25092999',
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
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
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
          fastQuery: true,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][width<100&&height<100][visibleToUser=true] <n * >3 [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1',
          snapshotUrls: [
            'https://i.gkd.li/i/16812335',
            'https://i.gkd.li/i/21120116',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
          snapshotUrls: 'https://i.gkd.li/i/20502977',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/76d02bfa-6d04-4005-b5aa-30ecfdd3cd84',
          snapshotUrls: 'https://i.gkd.li/i/21139548',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@ViewGroup[childCount=1][visibleToUser=true][width<100 && height<100] + ViewGroup > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/1f1c3315-d245-404b-ad16-554583b16283',
          snapshotUrls: 'https://i.gkd.li/i/21120146',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-打开app自动点击收藏列表第一个车🚗(不要同时开启哦~)',
      desc: '启动app-收藏列表第一个车线-进入车线详情',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@FrameLayout[clickable=true][getChild(0).vid="fav_line_layout"] - LinearLayout >2 [text="我的收藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25091170',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-打开app自动点击第一个车🚗后打开地图🗺️(不要同时开启哦~)',
      desc: '启动app-收藏列表第一个车线-进入车线详情-点击地图查看所有车次位置',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '@FrameLayout[clickable=true][getChild(0).vid="fav_line_layout"] - LinearLayout >2 [text="我的收藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25091170',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds:
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches: '[vid="cll_cover"][visibleToUser=true][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25091375',
        },
      ],
    },
  ],
});
