import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      //matchTime: 10000, 从桌面小组件进入哔哩哔哩观看视频后，退出返回到哔哩哔哩首页时会跳出开屏广告
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]', // [text*="跳过"] 可能会误触搜索框
          snapshotUrls: [
            'https://i.gkd.li/i/16187624',
            'https://i.gkd.li/i/16484445',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '局部广告-评论区顶部公告横幅',
      fastQuery: true,
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', // 直播间
        'tv.danmaku.bili.MainActivityV2', // 主页
      ],
      rules:
        'LinearLayout[id="tv.danmaku.bili:id/ad_tint_frame"] > ImageView[id="tv.danmaku.bili:id/close"][desc="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12785461',
        'https://i.gkd.li/i/12775156',
      ],
    },
    {
      key: 2,
      name: '局部广告-动态推荐卡片广告',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      fastQuery: true,
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/ad_goods_mark_big"]',
          snapshotUrls: 'https://i.gkd.li/i/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/i/12700243',
        },
      ],
    },
    // key = 3已弃用
    {
      key: 4,
      name: '分段广告-视频底部与评论区中间卡片广告',
      desc: '需点击二次弹窗 屏蔽原因',
      fastQuery: true,
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击卡片广告右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642260', // n = 2
            'https://i.gkd.li/i/12705266', // n = 3
            'https://i.gkd.li/i/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/i/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642261', // 屏蔽广告菜单弹窗
            'https://i.gkd.li/i/13495649',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      matchDelay: 5000,
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649689', // com.bilibili.app.preferences.BiliPreferencesActivity
            'https://i.gkd.li/i/13212209', // tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity
            'https://i.gkd.li/i/13228977',
            'https://i.gkd.li/i/13334963',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: '[id="tv.danmaku.bili:id/toast_x"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12892611',
        'https://i.gkd.li/i/13308344',
        'https://i.gkd.li/i/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          name: '直播间底部售卖卡片',
          matches: '[id="tv.danmaku.bili:id/shopping_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13200549',
        },
        {
          key: 1,
          name: '[关注]弹窗',
          fastQuery: true,
          matches: '@[vid="close"] -2 * >2 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/14782965',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13229159',
        'https://i.gkd.li/i/13614090',
      ],
    },
    {
      key: 10,
      name: '分段广告-首页推荐视频卡片广告',
      fastQuery: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 0,
          name: '点击卡片广告右下角菜单按钮',
          actionMaximum: 1,
          matches: '[vid="ad_tint_frame"] >2 [vid="more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14083540',
            'https://i.gkd.li/i/14588315',
            'https://i.gkd.li/i/14729855',
          ],
        },
        {
          key: 1,
          actionMaximum: 1,
          matches: '[vid="inline_more"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10',
          snapshotUrls: 'https://i.gkd.li/i/17428126',
        },

        //预留key
        {
          preKeys: [0, 1],
          key: 50,
          name: '点击[不感兴趣]/[相似内容过多]',
          matches:
            '@[clickable=true] > [text="相似内容过多" || text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/17428471',
          ],
        },
        {
          preKeys: [0],
          key: 52,
          name: '点击[up主不感兴趣]',
          matches: '@[clickable=true] > [text="up主不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94',
          snapshotUrls: 'https://i.gkd.li/i/13625309',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-个性化内容推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules:
        '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13448905',
    },
    {
      key: 12,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      fastQuery: true,
      forcedTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          activityIds: [
            'tv.danmaku.bili.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
          ],
          matches:
            'WebView[text="会员中心"] >4 [text="大会员服务协议"] +2 * >2 @TextView[visibleToUser=true][index=parent.childCount.minus(1)] <<n [vid="webview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/60eee9aa-8799-4097-8ddf-2783afd49586',
          snapshotUrls: [
            'https://i.gkd.li/i/15219142',
            'https://i.gkd.li/i/15220560',
            'https://i.gkd.li/i/15289942',
          ],
        },
        {
          key: 2,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            'WebView[text="大会员"] >3 View[childCount=4] >3 View[childCount=1] > View[childCount=1] > @Image[visibleToUser=true][childCount=0][text=""] <<n [vid="webview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f56c6392-c473-4988-af41-00adedbf3905',
          snapshotUrls: 'https://i.gkd.li/i/15328394',
        },
        {
          key: 3,
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches:
            '[text="会员中心"] >3 View > View[childCount=2] > View[childCount=1] > @TextView[clickable=true] <<n [vid="webview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4384e301-8a79-427e-88d6-7fb8e422c6e8',
          snapshotUrls: 'https://i.gkd.li/i/15523824',
        },
        {
          key: 4,
          activityIds: [
            'tv.danmaku.bili.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
          ],
          matches:
            'ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid="vip_panel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413',
          snapshotUrls: [
            'https://i.gkd.li/i/15523975',
            'https://i.gkd.li/i/15814146',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-分享稿件弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
          matches: '[vid="poster_share_cancel"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c',
          snapshotUrls: 'https://i.gkd.li/i/15858057',
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-搜索结果广告',
      desc: '点击右下角[菜单]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
      rules: [
        {
          key: 1,
          matches:
            '@[vid="more"][clickable=true][visibleToUser=true] -3 [vid="tag_layout"] > [vid="ad_tag_with_dot"]',
          exampleUrls: 'https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4',
          snapshotUrls: 'https://i.gkd.li/i/17269053',
        },
        {
          preKeys: [1],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589',
          snapshotUrls: 'https://i.gkd.li/i/17269055',
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-视频详情页下方推广',
      desc: '关闭[广告/推广/直播]',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[vid="more"] -(3,5) [vid="ad_desc" || vid="live_lottie_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/219c40c4-debf-40d8-889a-7eb39c87126c',
          snapshotUrls: [
            'https://i.gkd.li/i/17675629',
            'https://i.gkd.li/i/17675894',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] > [text="不感兴趣" || text="相似内容过多"]',
          exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
          snapshotUrls: [
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
          ],
        },
      ],
    },
  ],
});
