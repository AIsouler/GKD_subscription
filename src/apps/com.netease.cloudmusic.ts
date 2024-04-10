import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  deprecatedKeys: [9, 11, 12],
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[X]-点击[直接关闭]/[不感兴趣]',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
            'com.netease.cloudmusic.activity.MainActivity',
          ],
          excludeActivityIds:
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity', // 排除评论区，避免节点被遮罩时误触，评论区广告规则见groups key 13
          matches: '[vid="adTagView"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14277140',
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/12829964',
            'https://i.gkd.li/i/12829953',
          ],
        },
        {
          key: 1,
          name: '推荐页广告',
          quickFind: true,
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
          quickFind: true,
          activityIds: [
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
            'com.netease.cloudmusic.music.biz.search.activity.SearchActivity',
            'com.netease.cloudmusic.activity.MainActivity',
          ],
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12829967',
            'https://i.gkd.li/i/14277137',
            'https://i.gkd.li/i/13859635',
          ],
        },
        {
          preKeys: 2,
          key: 91,
          quickFind: true,
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
      quickFind: true,
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
      ],
    },
    {
      key: 3,
      name: '全屏广告-看广告免费听歌弹窗',
      quickFind: true,
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules:
        '@ImageView[clickable=true] + * >(1,2) [text="VIP歌曲免费听30分钟"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12843383',
        'https://i.gkd.li/i/13804534',
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
          quickFind: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView[visibleToUser=true] - * > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13229016',
            'https://i.gkd.li/i/13962214',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '@ImageView[index=1][clickable=true] <2 ViewGroup[childCount=2] <<n [vid="dsl_dialog_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13684724',
            'https://i.gkd.li/i/14036940',
          ],
        },
        {
          key: 4,
          name: '播放页赞赏好音乐弹窗',
          quickFind: true,
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView[clickable=true] +3 * > [text="立即支持"]',
          snapshotUrls: 'https://i.gkd.li/i/13848913',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-VIP弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            'ImageView <<n @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text="会员套餐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13189055',
            'https://i.gkd.li/i/13260416',
            'https://i.gkd.li/i/13996787',
          ],
        },
        {
          key: 1,
          name: '专属优惠-VIP续费弹窗',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView - ViewGroup > [text="解锁千万级会员曲库"]',
          snapshotUrls: 'https://i.gkd.li/i/13228955',
        },
        {
          key: 2,
          name: '解锁更高音质',
          activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
          matches: '@ImageView -2 ViewGroup [text="解锁更高音质"]',
          snapshotUrls: 'https://i.gkd.li/i/13230603',
        },
        {
          key: 3,
          name: '黑胶过期-VIP续费弹窗',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] -(3,4) ViewGroup[childCount=19] > [text="黑胶VIP连续包季"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13230605',
            'https://i.gkd.li/i/14268181',
          ],
        },
        {
          key: 4,
          name: '搭配会员音效-VIP支付弹窗',
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches:
            '[text*="搭配会员音效"] + @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13391498',
        },
        {
          key: 5,
          name: '搭配高清臻音-VIP支付弹窗',
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
          matches: '@ImageView[index=4] +5 ViewGroup [text*="确认协议并支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14045917',
            'https://i.gkd.li/i/14926722',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.cloudmusic:id/md_dialog_cm_close_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13233790',
            'https://i.gkd.li/i/13197457',
            'https://i.gkd.li/i/13228878',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-播放界面广告',
      desc: '点击关闭',
      quickFind: true,
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
          name: '巨幅卡片式广告1',
          matches: '[text^="跳过广告"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13527105',
        },
        {
          key: 2,
          name: '巨幅卡片式广告2',
          matches:
            '@TextView[index=2] <3 ViewGroup[childCount=3] <<n [id="com.netease.cloudmusic:id/container"]',
          snapshotUrls: 'https://i.gkd.li/i/14045424',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-发现页顶部视频广告',
      desc: '自动点击跳过。',
      quickFind: true,
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
      quickFind: true,
      activityIds:
        'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
      rules: [
        {
          key: 0,
          name: '点击关闭',
          matches:
            // 通过广告下方评论visibleToUser=true防止误触
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentVHRootId"] [vid="closeAction"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14549836',
        },
        {
          key: 2,
          name: '点击关闭',
          matches:
            '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentAdContainer"] >n [vid="adTagView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14275571',
            'https://i.gkd.li/i/14275955',
            'https://i.gkd.li/i/14070500', // 通过广告下方评论visibleToUser=true防止在此页面误触
          ],
        },
        {
          preKeys: [2],
          key: 98,
          name: '点击[直接关闭]',
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14932659',
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
          quickFind: true,
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
          quickFind: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@ImageView[clickable=true] <n * > [text="查看我的勋章"]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb',
          snapshotUrls: 'https://i.gkd.li/i/14926750',
        },
      ],
    },
  ],
});
