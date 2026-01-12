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
          excludeActivityIds: [
            '.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
          ],
          matches:
            '[text*="跳过" || text*="Skip"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15092772',
            'https://i.gkd.li/i/17892200', // 'Skip' for English users.
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15092814',
            'https://i.gkd.li/i/16318423',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[关闭]-点击[直接关闭]/[不感兴趣]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.music.biz.comment.activity.CommentActivity',
            '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          matches:
            '[vid="tag_ad_banner" || vid="adTagView" || vid="closeAction"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13859634',
            'https://i.gkd.li/i/13927753',
            'https://i.gkd.li/i/14549836',
            'https://i.gkd.li/i/14275955',
            'https://i.gkd.li/i/16047087',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0] <<n [vid="recyclerView"]',
          snapshotUrls: 'https://i.gkd.li/i/23771616',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.music.biz.comment.activity.CommentActivity',
          matches:
            '@ViewGroup[clickable=true][childCount=1] + ViewGroup[childCount=1] > [text="艺人相关"]',
          snapshotUrls: 'https://i.gkd.li/i/23771678',
        },
        {
          // preKeys: [0, 1],该条分段广告有概率被VIP弹窗插入导致二段不触发，故去掉preKeys
          key: 90,
          fastQuery: true,
          activityIds: [
            '.activity.MainActivity',
            '.music.biz.comment.activity.CommentActivity',
            '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1',
          ],
          anyMatches: [
            '[text="直接关闭"][clickable=true]',
            '@[clickable=true] > [text="不感兴趣"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13859635',
            'https://i.gkd.li/i/14932659',
            'https://i.gkd.li/i/16047089',
            'https://i.gkd.li/i/23771645',
          ],
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
          activityIds: '.activity.PlayerActivity',
          matches: '[vid="iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15282417',
        },
        {
          key: 1,
          activityIds: '.music.biz.search.activity.SearchActivity',
          matches: '[vid="adCloseIV"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16385547',
        },
        {
          key: 2,
          activityIds: '.activity.MainActivity',
          matches: '[vid="v_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23982125',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          activityIds: [
            '.activity.MainActivity',
            '.activity.PlayerActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
            '.music.biz.comment.activity.CommentActivity',
          ],
          excludeMatches:
            '[text="当前场景" || vid="mainDrawerContainer"][visibleToUser=true]',
          matches:
            '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text^="续费后，即可畅听" || text*="小组件到桌面"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534',
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/20097535',
            'https://i.gkd.li/i/20097609',
            'https://i.gkd.li/i/20115012',
            'https://i.gkd.li/i/22451511',
            'https://i.gkd.li/i/23770986',
            'https://i.gkd.li/i/23770978',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15404777',
            'https://i.gkd.li/i/20115204',
            'https://i.gkd.li/i/20159204',
            'https://i.gkd.li/i/24157914',
          ],
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
            '.music.biz.rn.activity.MainProcessLayerReactNativeActivity',
            '.activity.MainActivity',
            '.activity.PlayListActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
          ],
          matches: [
            '[text="支付宝"][visibleToUser=true]',
            '[text^="确认协议并" || text="立即开通"][visibleToUser=true]',
          ],
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
            'https://i.gkd.li/i/20097276',
            'https://i.gkd.li/i/20218350',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/20097306', // 正常开通会员页面
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity',
          matches:
            '[text="忍痛离开"] < @ViewGroup[clickable=true] -n * > [text$="VIP可畅享千万曲库"]',
          snapshotUrls: 'https://i.gkd.li/i/24548104',
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
          activityIds: '.activity.MainActivity',
          matches: ['[text*="新版本"]', '[text="近期不再提示"]'],
          snapshotUrls: 'https://i.gkd.li/i/13233790',
          excludeSnapshotUrls: 'https://i.gkd.li/i/15092457',
        },
        {
          key: 1,
          activityIds: '.activity.MainActivity',
          matches: [
            '[vid="updateVersionTitle"][visibleToUser=true]',
            '[vid="md_dialog_cm_close_btn"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/8827aa5a-a105-4910-981c-d9ecc036a87d',
          snapshotUrls: 'https://i.gkd.li/i/18492805',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-扫码后自动点击[授权登录]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.login.LoginPermissionActivity',
          matches: '[text="授权登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14830218',
        },
      ],
    },
    {
      key: 16,
      name: '分段广告-搜索页广告',
      desc: '该规则触发时会导致输入法收起',
      fastQuery: true,
      activityIds: '.music.biz.search.activity.SearchActivity',
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
