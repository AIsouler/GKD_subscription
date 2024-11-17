import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.setting.activity.SettingActivity',
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15092772',
            'https://i.gkd.li/i/15092814', // 避免误触
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[X]-点击[直接关闭]/[不感兴趣]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity', // 排除评论区，避免节点被遮罩时误触，评论区广告规则见groups key 13
          matches: '[vid="adTagView"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8',
          snapshotUrls: [
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/12829964',
            'https://i.gkd.li/i/12829953',
            'https://i.gkd.li/i/16047087',
          ],
        },
        {
          key: 1,
          name: '推荐页广告',
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="tag_ad_banner"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b14cda2e-27e5-4a91-8037-3ccbf1f9d0da',
          snapshotUrls: 'https://i.gkd.li/i/13927753',
        },
        {
          key: 2,
          name: '评论区内容推荐',
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
          snapshotUrls: [
            'https://i.gkd.li/i/13526986',
            'https://i.gkd.li/i/13526711',
          ],
        },
        {
          // preKeys: [0, 1],该条分段广告有概率被VIP弹窗插入导致二段不触发，故去掉preKeys
          key: 90,
          fastQuery: true,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12829967',
            'https://i.gkd.li/i/13859635',
            'https://i.gkd.li/i/16047089',
          ],
        },
        {
          preKeys: 2,
          key: 91,
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          matches:
            '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13526712',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '[我的]页面广告',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '[id="com.netease.cloudmusic:id/resource_view"] > [id="com.netease.cloudmusic:id/close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/827ebe8b-f3c6-4068-8d31-11d5b2578680',
          snapshotUrls: 'https://i.gkd.li/i/12745666',
        },
        {
          key: 1,
          name: '首页卡片广告',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="adTagView"]',
          snapshotUrls: 'https://i.gkd.li/i/15047096',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '[vid="iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
        {
          key: 3,
          activityIds:
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
          matches: '[vid="adCloseIV"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16385547',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: 'WebView >n View > TextView + TextView + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13188737',
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.activity.PlayerActivity',
          ],
          excludeMatches: '[text="当前场景"]',
          matches: '[vid="dsl_dialog_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/13230603',
            'https://i.gkd.li/i/15404777', // 避免误触
          ],
        },
        {
          key: 6,
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            'View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid="popLayerWebViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15160018',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          action: 'back',
          activityIds: [
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            'com.netease.cloudmusic.activity.MainActivity',
            '.activity.PlayListActivity',
          ],
          matches: ['[text="支付宝"]', '[text^="确认协议并"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
            'https://i.gkd.li/i/13391498',
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
            'https://i.gkd.li/i/16242200',
          ],
        },
        {
          key: 1,
          action: 'back',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text^="邀您开通VIP"]',
          snapshotUrls: 'https://i.gkd.li/i/14956768',
        },
        {
          key: 7,
          action: 'back',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[vid="view_button_main"][text*="立即续费"]',
          snapshotUrls: 'https://i.gkd.li/i/14969806',
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['[text*="新版本"]', '[text="近期不再提示"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13233790',
            'https://i.gkd.li/i/13197457',
            'https://i.gkd.li/i/13228878',
            'https://i.gkd.li/i/15092457', // 避免误触
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-播放界面广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          name: '右上角VIP小悬浮',
          matches:
            'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13402634',
            'https://i.gkd.li/i/13402635',
            'https://i.gkd.li/i/13402636',
          ],
        },
        {
          key: 1,
          name: '巨幅卡片广告1',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13527105',
        },
        {
          key: 2,
          name: '巨幅卡片广告2',
          matches:
            '@TextView[text!=null][clickable=true][visibleToUser=true] - ViewGroup > [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14045424',
        },
        {
          key: 3,
          name: '巨幅卡片广告3',
          matches:
            '[vid="iv_ad_close"][clickable=true][visibleToUser=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-发现页顶部视频广告',
      desc: '自动点击跳过。',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
          snapshotUrls: 'https://i.gkd.li/i/13768367',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-功能升级弹窗',
      rules: [
        {
          key: 0,
          name: '"我的"升级-下次再说',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[text="下次再说"] < ViewGroup',
          snapshotUrls: 'https://i.gkd.li/i/13804541',
        },
        {
          key: 1,
          name: '"社区广场"升级-点击右上角x',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
          matches: '[text="社区广场全新升级"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13804544',
        },
      ],
    },
    {
      key: 13,
      name: '分段广告-评论区广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      fastQuery: true,
      activityIds: [
        'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2',
      ],
      rules: [
        {
          key: 0,
          name: '点击关闭-1',
          matches:
            // 通过广告下方评论visibleToUser=true防止误触
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentVHRootId"] [vid="closeAction"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14549836',
        },
        {
          key: 2,
          name: '点击关闭-2',
          matches:
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentAdContainer"] >n [vid="adTagView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14275571',
            'https://i.gkd.li/i/14275955',
            'https://i.gkd.li/i/14070500', // 通过广告下方评论visibleToUser=true防止在此页面误触
            'https://i.gkd.li/i/14964827',
            'https://i.gkd.li/i/14964828',
          ],
        },
        {
          preKeys: [2],
          key: 98,
          name: '点击[直接关闭]',
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14932659',
            'https://i.gkd.li/i/14964832',
          ],
        },
        {
          preKeys: [0],
          key: 99,
          name: '点击[不感兴趣]',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14549856',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-扫码后自动点击[授权登录]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.module.login.LoginPermissionActivity',
          matches: '[text="授权登录"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/f2aa603b-d1d1-4f92-86ae-e311e79a011d',
          snapshotUrls: 'https://i.gkd.li/i/14830218',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-[获得新徽章]弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView[clickable=true] <n * > [text="查看我的勋章"]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb',
          snapshotUrls: 'https://i.gkd.li/i/14926750',
        },
      ],
    },
    {
      key: 16,
      name: '分段广告-搜索页广告',
      desc: '该规则触发时会导致输入法收起',
      fastQuery: true,
      activityIds:
        'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="adTagView" || vid="adTagViewNew"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667',
          snapshotUrls: [
            'https://i.gkd.li/i/16357208',
            'https://i.gkd.li/i/16357111',
          ],
        },
        {
          preKeys: [0],
          key: 90,
          matches: '[text="直接关闭"]',
          exampleUrls: 'https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c',
          snapshotUrls: 'https://i.gkd.li/i/16357210',
        },
      ],
    },
  ],
});
