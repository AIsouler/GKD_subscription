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
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: [
            'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
            'tv.danmaku.bili.MainActivityV2',
          ],
          matches:
            'LinearLayout[id="tv.danmaku.bili:id/ad_tint_frame"] > ImageView[id="tv.danmaku.bili:id/close"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12785461',
            'https://i.gkd.li/i/12775156',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-动态推荐卡片广告',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      fastQuery: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/ad_goods_mark_big"]',
          snapshotUrls: 'https://i.gkd.li/i/12700222',
        },
        {
          preKeys: [1],
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/i/12700243',
        },
      ],
    },
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
            'https://i.gkd.li/i/12642260',
            'https://i.gkd.li/i/12705266',
            'https://i.gkd.li/i/12776568',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642261',
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
      resetMatch: 'app',
      activityIds: [
        'com.bilibili.app.preferences.BiliPreferencesActivity',
        'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        '.MainActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: '[text="忽略此版本的更新"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649689',
            'https://i.gkd.li/i/13212209',
            'https://i.gkd.li/i/13228977',
          ],
        },
        {
          preKeys: [1],
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649689',
            'https://i.gkd.li/i/13212209',
            'https://i.gkd.li/i/13228977',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频页广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      rules: [
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.video.videodetail.VideoDetailsActivity',
          ],
          matches: '[id="tv.danmaku.bili:id/toast_x"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12892611',
            'https://i.gkd.li/i/13308344',
            'https://i.gkd.li/i/13538048',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
          exampleUrls: 'https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e',
          snapshotUrls: 'https://i.gkd.li/i/18165189',
        },
      ],
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
          name: '[关注/投喂]弹窗',
          matches: '@[vid="close"] - [vid="up_avatar" || vid="gift_icon"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782965',
            'https://i.gkd.li/i/18046573',
          ],
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
      rules: [
        {
          activityIds: [
            '.MainActivityV2',
            'com.bilibili.video.story.StoryTransparentActivity',
          ],
          matches: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13229159',
            'https://i.gkd.li/i/13614090',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-首页推荐视频卡片广告',
      fastQuery: true,
      activityIds: '.MainActivityV2',
      rules: [
        {
          key: 0,
          name: '点击卡片广告右下角菜单按钮',
          matches: '@[vid="more"] - [vid="desc_content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14083540',
            'https://i.gkd.li/i/14588315',
            'https://i.gkd.li/i/14729855',
            'https://i.gkd.li/i/18306851',
          ],
        },
        {
          key: 1,
          matches:
            '@[vid="inline_more"][visibleToUser=true] <4 ViewGroup - FrameLayout > [vid="corner_hint_container"]',
          exampleUrls: 'https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10',
          snapshotUrls: 'https://i.gkd.li/i/17428126',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17848536',
        },
        {
          key: 2,
          matches:
            '@[vid="more"][visibleToUser=true] -2 [text^="广告"] <<n [vid="tool_container"]',
          exampleUrls: 'https://e.gkd.li/21292629-5d84-407d-a889-e7bfaa4babc3',
          snapshotUrls: 'https://i.gkd.li/i/18274379',
        },

        //预留key
        {
          preKeys: [0, 1, 2],
          key: 50,
          name: '点击[不感兴趣]/[相似内容过多]',
          matches:
            '@[clickable=true] > [text="相似内容过多" || text="不感兴趣" || text="up主不感兴趣" || text="对该up的直播不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625309',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/17428471',
            'https://i.gkd.li/i/18274380',
            'https://i.gkd.li/i/18292926',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18292929',
            'https://i.gkd.li/i/18306849',
          ],
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
      rules: [
        {
          activityIds: 'tv.danmaku.bili.MainActivityV2',
          matches:
            '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13448905',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      forcedTime: 10000,
      rules: [
        {
          key: 1,
          action: 'clickCenter',
          activityIds: [
            'tv.danmaku.bili.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
            'com.bilibili.module.vip.web.VipWebActivity',
          ],
          matches:
            '@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text="会员中心" || text="大会员"] < WebView < [vid="webview"]',
          exampleUrls: 'https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba',
          snapshotUrls: [
            'https://i.gkd.li/i/15219142',
            'https://i.gkd.li/i/15220560',
            'https://i.gkd.li/i/15289942',
            'https://i.gkd.li/i/15328394',
            'https://i.gkd.li/i/18236032',
          ],
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
            '@[vid="more"][clickable=true][visibleToUser=true] -(3,4) [vid="tag_layout"]',
          exampleUrls: 'https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4',
          snapshotUrls: [
            'https://i.gkd.li/i/17269053',
            'https://i.gkd.li/i/17964354',
          ],
        },
        {
          preKeys: [1],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589',
          snapshotUrls: [
            'https://i.gkd.li/i/17269055',
            'https://i.gkd.li/i/17964356',
          ],
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
            'https://i.gkd.li/i/18306858',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] > [text="不感兴趣" || text="相似内容过多" || text="对该up的直播不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
          snapshotUrls: [
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
            'https://i.gkd.li/i/18296940',
            'https://i.gkd.li/i/18306839',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '功能类-自动关闭故事模式',
      desc: '播放视频时退出竖屏模式',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.video.story.StoryVideoActivity',
          matches: '[vid="story_ctrl_router"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c',
          snapshotUrls: 'https://i.gkd.li/i/18164075',
        },
      ],
    },
  ],
});
