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
      actionMaximum: 2, // 可能连续出现两次 https://github.com/AIsouler/GKD_subscription/issues/1280
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          actionCd: 500,
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
      name: '局部广告-直播间悬浮窗广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          matches:
            '[id="tv.danmaku.bili:id/shopping_close" || vid="live_game_card_close" || vid="match_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13200549',
            'https://i.gkd.li/i/22990081',
            'https://i.gkd.li/i/23098023',
          ],
        },
        {
          key: 1,
          matches:
            '@[vid="close" || vid="iv_close"] - [vid="up_avatar" || vid="gift_icon" || vid="follow_container"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782965',
            'https://i.gkd.li/i/18046573',
            'https://i.gkd.li/i/22990105',
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
            'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity',
          ],
          matches: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13229159',
            'https://i.gkd.li/i/13614090',
            'https://i.gkd.li/i/21578494',
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
          matches:
            '@[vid="more" || id="tv.danmaku.bili.adbiz:id/more"] <<n [vid="tool_container" || vid="ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/root_container" || id="tv.danmaku.bili.adbiz:id/constraintLayout"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14083540',
            'https://i.gkd.li/i/14588315',
            'https://i.gkd.li/i/14729855',
            'https://i.gkd.li/i/18274379',
            'https://i.gkd.li/i/18306851',
            'https://i.gkd.li/i/19537979',
            'https://i.gkd.li/i/23012670',
            'https://i.gkd.li/i/23123800',
            'https://i.gkd.li/i/23687196',
          ],
        },
        {
          key: 1,
          matches:
            '@[vid="inline_more"] <<n [vid="card_content"][visibleToUser=true][getChild(1).getChild(1).vid="corner_hint_container"]',
          exampleUrls: 'https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10',
          snapshotUrls: 'https://i.gkd.li/i/17428126',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17848536',
        },

        //预留key
        {
          preKeys: [0, 1],
          key: 50,
          name: '点击[不感兴趣]/[相似内容过多]',
          matches:
            '@[clickable=true] > [text="相似内容过多" || text="不感兴趣" || text="up主不感兴趣" || text="对该up的直播不感兴趣" || text="我不想看" || text="引人不适"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625309',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/17428471',
            'https://i.gkd.li/i/18274380',
            'https://i.gkd.li/i/18292926',
            'https://i.gkd.li/i/20710223',
            'https://i.gkd.li/i/23687208',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18292929',
            'https://i.gkd.li/i/18306849',
          ],
        },
        {
          preKeys: [50],
          key: 70,
          matches:
            '@FrameLayout[clickable=true] > [text="此类内容过多" || text="相似内容过多"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2aba6082-1047-464e-959c-82ee62e492aa',
          snapshotUrls: [
            'https://i.gkd.li/i/20718890',
            'https://i.gkd.li/i/20720187',
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
          //action: 'clickCenter', 此种点击方式在部分应用版本会造成误触，需点击 clickable=true 节点
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
            'https://i.gkd.li/i/22310507',
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
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            '@TextView[width<130 && height<130] - TextView[childCount=0][id="dialog-canvas"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/23385023',
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
          matches: '@[clickable=true] > [text$="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589',
          snapshotUrls: [
            'https://i.gkd.li/i/17269055',
            'https://i.gkd.li/i/17964356',
            'https://i.gkd.li/i/22657666', // 直播
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
          anyMatches: [
            '@[vid="more" || vid="more_layout" || id="tv.danmaku.bili.adbiz:id/more" || id="tv.danmaku.bili.adbiz:id/more_layout"] <<n [vid="ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame"][visibleToUser=true]', // 广告、推广
            '@[vid="more"] -(3,5) [vid="live_lottie_layout"][visibleToUser=true]', // 直播
            '[!(vid="duration" || vid="second_to_last_line_area") || text="课堂"] <3 ViewGroup[getChild(0).vid="cover"] > [vid="more"][visibleToUser=true]', // 纪录片、课堂推广、游戏
          ],
          exampleUrls: [
            'https://e.gkd.li/219c40c4-debf-40d8-889a-7eb39c87126c',
            'https://e.gkd.li/dc54e6ee-24df-49a8-874a-f381326122c3',
          ],
          snapshotUrls: [
            // 广告、推广
            'https://i.gkd.li/i/17675629',
            'https://i.gkd.li/i/20739380',
            'https://i.gkd.li/i/20744764',
            'https://i.gkd.li/i/20794380',
            'https://i.gkd.li/i/21552836',
            'https://i.gkd.li/i/21705345',
            'https://i.gkd.li/i/21947622',

            // 直播
            'https://i.gkd.li/i/17675894',
            'https://i.gkd.li/i/18306858',

            // 纪录片、课堂推广、游戏
            'https://i.gkd.li/i/23934632',
            'https://i.gkd.li/i/23933925',
            'https://i.gkd.li/i/23933866',
            'https://i.gkd.li/i/24015674',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24365466',
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] > [text*="不感兴趣" || text="相似内容过多" || text="我不想看"]',
          exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
          snapshotUrls: [
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
            'https://i.gkd.li/i/18296940',
            'https://i.gkd.li/i/18306839',
            'https://i.gkd.li/i/20739391',
            'https://i.gkd.li/i/24015691',
            'https://i.gkd.li/i/24336415',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[vid="close_dislike"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77',
          snapshotUrls: 'https://i.gkd.li/i/18587456',
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
          activityIds: [
            'com.bilibili.video.story.StoryVideoActivity',
            'com.bilibili.video.story.StoryTransparentActivity',
          ],
          matches: '[vid="story_ctrl_router"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c',
          snapshotUrls: [
            'https://i.gkd.li/i/18164075',
            'https://i.gkd.li/i/23325994',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '功能类-自动点击评论区的[展开更多评论]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.bilibili.video.story.StoryVideoActivity',
            'com.bilibili.video.story.StoryTransparentActivity',
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity',
          ],
          matches: '@LinearLayout[clickable=true] > [text="展开更多评论"]',
          exampleUrls: 'https://e.gkd.li/e7b7167e-7623-4079-9f16-fd253f303074',
          snapshotUrls: [
            'https://i.gkd.li/i/22572375',
            'https://i.gkd.li/i/23325508',
            'https://i.gkd.li/i/22573433',
            'https://i.gkd.li/i/23786106',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-自动领取会员经验',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            'TextView[childCount=0][text!=null][index=parent.childCount.minus(1)] -2 View >3 [text^="专属等级加速包"] +2 @TextView[childCount=0][text="领取"] <<n [vid="webview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22886723', // 领取前
            'https://i.gkd.li/i/22886739', // 领取后
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23385023',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.bilibili.video.story.StoryVideoActivity', // 视频：竖屏模式1
            'com.bilibili.video.story.StoryTransparentActivity', // 视频：竖屏模式2
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', // 视频：详情页模式
            'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity', // 视频：播放列表（稍后再看/收藏夹）
            'com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2', // 动态：图片
            'com.bilibili.lib.ui.ComposeActivity', // 动态：评论图片
            'com.bilibili.column.ui.detail.image.ColumnImageViewerActivity', // 专栏图片
          ],
          matches: '[text^="查看原图"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c0ffc9cb-fac0-4b5c-9645-3674942b5c7d',
          snapshotUrls: [
            'https://i.gkd.li/i/23325552', // 视频：竖屏模式1
            'https://i.gkd.li/i/23304237', // 视频：竖屏模式2
            'https://i.gkd.li/i/23304245', // 视频：详情页模式
            'https://i.gkd.li/i/23786065', // 视频：播放列表（稍后再看/收藏夹）
            'https://i.gkd.li/i/23305280', // 动态：帖内图片
            'https://i.gkd.li/i/23305281', // 动态：评论图片
            'https://i.gkd.li/i/23305275', // 专栏图片
          ],
        },
      ],
    },
    {
      key: 20,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
          matches: '[vid="rating_dialog_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/23440560',
        },
      ],
    },
  ],
});
