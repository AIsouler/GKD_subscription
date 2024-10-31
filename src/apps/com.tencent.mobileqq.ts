import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity', // 在聊天界面禁用
        'com.tencent.mobileqq.search.activity.UniteSearchActivity', // 在搜索页面禁用
      ],
      rules: [
        {
          excludeMatches: '[vid="root"]', // 在聊天界面禁用，若排除EditText[vid="input"]则滑动消息时会造成误触
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
            'https://i.gkd.li/i/13217807', // 避免在聊天界面误触
            'https://i.gkd.li/i/13856647', // 误触
            'https://i.gkd.li/i/13868177', // 误触
            'https://i.gkd.li/i/14341023', // 误触
            'https://i.gkd.li/i/15334565', // 误触
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-顶部横幅广告',
      desc: '点击关闭',
      activityIds: '.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: 'ImageView[desc="关闭"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/17552202'],
        },
        {
          key: 1,
          name: '消息页面-顶部惊喜礼包',
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][visibleToUser=true] - FrameLayout - [text*="惊喜礼包"]',
          snapshotUrls: 'https://i.gkd.li/i/13426912',
        },
        {
          key: 2,
          matches:
            'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13476400',
        },
        {
          key: 3,
          name: '右侧悬浮广告',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout >3 ImageView[clickable=false] - View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708844',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-好友动态-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12847842',
            'https://i.gkd.li/i/13787345',
          ],
        },
        {
          key: 1,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '[desc="广告 展开 按钮"] > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14138572',
        },
        {
          preKeys: 0,
          key: 2,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          fastQuery: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13761147',
            'https://i.gkd.li/i/13849730',
          ],
        },
        {
          preKeys: [0, 1],
          key: 4,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
            'com.tencent.mobileqq.activity.SplashActivity',
          ],
          fastQuery: true,
          matches: '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840889',
            'https://i.gkd.li/i/13831867',
            'https://i.gkd.li/i/14138571',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
        '.activity.QPublicFragmentActivity',
        '.activity.QPublicTransFragmentActivity',
        '.activity.QQBrowserActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206663',
            'https://i.gkd.li/i/12642081',
          ],
        },
        {
          key: 1,
          name: '钱包页面-卡片广告',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
        },
        {
          key: 2,
          name: '大会员&黄钻页面-弹窗广告',
          matches:
            '@Button[desc="关闭广告弹窗"][clickable=false] - Button[desc!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/17554067',
            'https://i.gkd.li/i/17554023',
          ],
        },
        {
          key: 3,
          name: '等级页-弹窗广告',
          matches: 'ViewGroup[desc="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17554539',
        },
        {
          key: 4,
          name: '会员页面-弹窗广告',
          matches:
            'TextView[text="QQ等级规则"] + View > TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12914734',
        },
        {
          key: 5,
          fastQuery: true,
          matches:
            'ViewGroup[childCount=6] > ViewGroup[clickable=true][index=2]',
          snapshotUrls: 'https://i.gkd.li/i/15136939',
        },
        {
          key: 6,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            'ViewGroup[childCount=3] > ViewGroup[childCount=6] + ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/15981784',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的卡片广告,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12706907',
        'https://i.gkd.li/i/13107298',
        'https://i.gkd.li/i/12793359',
        'https://i.gkd.li/i/12855048',
        'https://i.gkd.li/i/13228108',
      ],
    },
    {
      key: 6,
      name: '分段广告-钱包页&天气页&动态页好友热播',
      fastQuery: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
        '.activity.QPublicFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: '@Button[clickable=true] - [text="好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          key: 1,
          name: '钱包页-弹窗广告',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
        },
        {
          key: 2,
          name: '钱包页-点击[广告]卡片右上角按钮',
          matches: 'TextView[text="广告"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17554961',
            'https://i.gkd.li/i/17583129',
          ],
        },
        {
          key: 3,
          name: '天气页-点击[广告]卡片右上角按钮',
          matches:
            '@LinearLayout[clickable=true] > TextView[text="广告"][clickable=false]',
          snapshotUrls: ['https://i.gkd.li/i/17555697'],
        },
        {
          preKeys: [0],
          name: '点击[减少好友热播]',
          matches: '@[clickable=true] >2 [text="减少好友热播"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/14822576',
          ],
        },
        {
          preKeys: [2, 3],
          name: '钱包页&天气页-点击[关闭此条广告]',
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17555042',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-消息页面顶部-新消息通知',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12855441',
    },
    {
      key: 8,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图，可手动取消勾选',
      actionMaximum: 1,
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12705556', // 未勾选原图
        'https://i.gkd.li/i/12705559', // 已勾选原图
        'https://i.gkd.li/i/13295142',
        'https://i.gkd.li/i/13476247',
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
          matches: '[text^="查看原图"]',
          snapshotUrls: 'https://i.gkd.li/i/14757735',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-QQ小世界评论区广告',
      desc: '点击广告-弹出原因框-关闭此条广告',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.biz.qqcircle.activity.QCircleFolderActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12847819',
        },
        {
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12847821',
        },
      ],
    },
    {
      key: 11,
      name: '开屏广告-QQ小程序开屏广告',
      desc: '点击右下角跳过',
      actionMaximum: 1,
      priorityTime: 10000,
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
      ],
      rules: [
        {
          matches: ['[text="跳过"][visibleToUser=true]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12919195',
            'https://i.gkd.li/i/15130235',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '分段广告-好友动态页面"为你推荐"',
      fastQuery: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '@[desc="关闭"] <2 * >2 Button[text^="立即"][text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/13386719',
            'https://i.gkd.li/i/13526551',
          ],
        },
        {
          key: 1,
          matches: ['[text="立即升级"]', '[text="稍后处理"]'],
          snapshotUrls: 'https://i.gkd.li/i/14724108',
        },
      ],
    },
    {
      key: 14,
      name: '更新提示-消息页面-顶部',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@ImageView[clickable=true] <n * > [text*="版本更新" || text*="有新版本"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255493', //desc值为null快照
            'https://i.gkd.li/i/13843140',
            'https://i.gkd.li/i/14138340',
            'https://i.gkd.li/i/13931212',
            'https://i.gkd.li/i/16323755', // add [text*="有新版本"]
          ],
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
      rules: [
        {
          key: 0,
          name: '元梦之星弹窗广告',
          matches:
            'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13797876',
        },
        {
          key: 1,
          name: '现金瓜分弹窗',
          matches:
            'RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a9fe74db-07b4-47e6-beed-80983f61d2e3',
          snapshotUrls: 'https://i.gkd.li/i/14207286',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-新春回馈礼弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'RelativeLayout[childCount=4] > View + RelativeLayout[childCount=2] + ImageView + ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/b09d6db6-0e67-421a-aa7d-35453bf9a0bc',
          snapshotUrls: [
            'https://i.gkd.li/i/14134934',
            'https://i.gkd.li/i/14151820', // 误触快照
          ],
        },
      ],
    },
    {
      key: 17,
      name: '局部广告-聊天页面广告',
      rules: [
        {
          key: 0,
          name: '集福卡活动卡片',
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[clickable=true] -2 [text$="会员月卡"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7',
          snapshotUrls: [
            'https://i.gkd.li/i/14178667',
            'https://i.gkd.li/i/14193973', // 误触界面
            'https://i.gkd.li/i/14235146', // 误触界面
          ],
        },
        {
          key: 1,
          name: '关键词广告',
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
            'com.tencent.mobileqq.activity.ChatActivity',
            'com.tencent.mobileqq.activity.SplashActivity',
          ],
          matches:
            'FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text="跳过" || text="关闭"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131',
          snapshotUrls: [
            'https://i.gkd.li/i/14183188',
            'https://i.gkd.li/i/16549500',
            'https://i.gkd.li/i/16555184',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-个人主页广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '迷你窝弹窗',
          fastQuery: true,
          action: 'back',
          activityIds:
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[text="开启迷你窝"]',
          exampleUrls:
            'https://m.gkd.li/57941037/882ab889-a145-4951-9a44-1dc192490c79',
          snapshotUrls: 'https://i.gkd.li/i/14188980',
        },
        {
          key: 1,
          name: '个性装扮弹窗',
          activityIds: 'cooperation.vip.ad.UserLeadingActivity',
          matches: '[desc="关闭"][visibleToUser=true]', // 右侧关闭按钮无效
          snapshotUrls: 'https://i.gkd.li/i/15137056',
        },
      ],
    },
    {
      key: 19,
      name: '全屏广告-腾讯文档页面-"使用App"弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [vid="webview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb',
          snapshotUrls: 'https://i.gkd.li/i/14188983',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-自动抢红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不抢',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'ImageView < * < FrameLayout +2 * >3 TextView[text*="红包"] - @ViewGroup[childCount=5] > TextView[text!="已领取"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: 'https://i.gkd.li/i/14221309',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@[desc="拆红包"] - RelativeLayout > [text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: 'https://i.gkd.li/i/14221242',
        },
        {
          preKeys: 1,
          key: 2,
          fastQuery: true,
          matches: '@[desc="返回"] + [text="红包记录"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: 'https://i.gkd.li/i/14221279',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-账号信息页面-新人SVIP领取弹窗',
      activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
      rules: '[childCount=3] > [desc*="活动"] + [desc^="关闭"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/14217758',
        'https://i.gkd.li/i/14217783',
      ],
    },
    {
      key: 22,
      name: '功能类-扫一扫登录确认',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          name: '点击登录',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches:
            'Button[text*="登录"][clickable=true][visibleToUser=true][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13623520',
            'https://i.gkd.li/i/12789287',
            'https://i.gkd.li/i/13063027',
            'https://i.gkd.li/i/13166314',
          ],
        },
        {
          key: 2,
          name: '点击同意',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14752498',
        },
        {
          preKeys: [2],
          key: 3,
          name: '点击确认',
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14752519',
        },
      ],
    },
    {
      key: 23,
      name: '功能类-申请入群后自动点击右上角关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            'TextView[text="入群申请中"] <2 RelativeLayout - RelativeLayout > TextView[text="关闭"][clickable=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/df526685-8a68-48cd-8328-0292079ff030',
          snapshotUrls: 'https://i.gkd.li/i/14235163',
        },
      ],
    },
    {
      key: 24,
      name: '局部广告-动态页-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'LinearLayout[childCount=1] > FrameLayout[childCount=1] > FrameLayout[childCount=1] > @View[visibleToUser=true][childCount=0] <<n [vid="root"]',
          exampleUrls: 'https://e.gkd.li/438add53-c7cb-41e5-ab98-910f4570ea72',
          snapshotUrls: [
            'https://i.gkd.li/i/14732983',
            'https://i.gkd.li/i/16834757',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12749584',
            'https://i.gkd.li/i/13627967',
          ],
        },
        {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[childCount=7] > FrameLayout[childCount=2] > @ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/15388608',
            'https://i.gkd.li/i/16154341',
          ],
        },
        {
          key: 3,
          name: '好友动态详情页广告',
          activityIds: 'com.qzone.reborn.base.QZoneTransparentShellActivity',
          fastQuery: true,
          matches: '@[desc="关闭广告"][visibleToUser=true] -3 [text^="活动"]',
          exampleUrls: 'https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3',
          snapshotUrls: 'https://i.gkd.li/i/17009847',
        },
      ],
    },
    {
      key: 25,
      name: '功能类-授权登录时关闭获取QQ好友关系',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches:
            '@CompoundButton[checked=true] - RelativeLayout > [text="你的QQ好友关系"]',
          exampleUrls: 'https://e.gkd.li/4d69a243-6a57-47ca-bc25-0a5353d80179',
          snapshotUrls: 'https://i.gkd.li/i/16929347',
        },
      ],
    },
    {
      key: 26,
      name: '功能类-QQ自动进入打卡页立即打卡',
      desc: '点击打卡-进入-立即打卡',
      activityIds: ['.activity.SplashActivity', '.activity.QQBrowserActivity'],
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          name: '点击[打卡]',
          matches: '@LinearLayout[clickable=true] > TextView[text^="打卡"]',
          snapshotUrls: 'https://i.gkd.li/i/17566121',
        },
        {
          key: 2,
          name: '点击[立即打卡]',
          matches: '[text="立即打卡"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17552369',
        },
        {
          preKeys: [2],
          forcedTime: 350,
          name: '点击[返回]',
          matches: 'TextView[desc="返回"][clickable=true]',
          // 'Button[text="分享"] <<n FrameLayout + RelativeLayout >3 TextView[desc="返回"]',
          snapshotUrls: 'https://i.gkd.li/i/17568038',
        },
      ],
    },
  ],
});
