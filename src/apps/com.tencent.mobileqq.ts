import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
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
      key: 1,
      name: '局部广告-消息页面顶部横幅广告',
      desc: '点击关闭',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text!=null] < LinearLayout + ImageView[desc="关闭"]', // 原@语法会出现两个选项可能会导致误触
          snapshotUrls: [
            'https://i.gkd.li/i/12892726',
            'https://i.gkd.li/i/12774870',
            'https://i.gkd.li/i/13207766',
            'https://i.gkd.li/i/13386518',
          ],
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
          name: '稀有龙鹅卡掉落/瓜分现金',
          matches:
            'RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14155603',
            'https://i.gkd.li/i/14217033',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-好友动态-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          exampleUrls: 'https://e.gkd.li/21ede3d4-b1b7-4e85-b4d3-2c4876420a71',
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
          key: 5,
          fastQuery: true,
          activityIds:
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
          matches:
            '@[desc="更多"][clickable=true] > [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/60125725-39d4-4d43-a79d-dcfa7384d357',
          snapshotUrls: 'https://i.gkd.li/i/21947672',
        },
        {
          preKeys: [0, 1, 5],
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
          ],
          anyMatches: [
            '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
            '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13761147',
            'https://i.gkd.li/i/13849730',
            'https://i.gkd.li/i/12840889',
            'https://i.gkd.li/i/13831867',
            'https://i.gkd.li/i/14138571',
            'https://i.gkd.li/i/21947698',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/15136939',
        },
        {
          key: 5,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'RelativeLayout >3 ViewGroup[childCount=2] > ViewGroup[childCount=3] > ViewGroup[clickable=true][childCount=0][text=null]',
          snapshotUrls: 'https://i.gkd.li/i/15981784',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的卡片广告,点击右侧关闭',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@[index=parent.childCount.minus(1)][name$="ImageView"||name$="Button"][id!=null][clickable=true] - FrameLayout[childCount<=2] - TextView[text*="SVIP"||text*="超级会员"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12706907',
            'https://i.gkd.li/i/13107298',
            'https://i.gkd.li/i/12793359',
            'https://i.gkd.li/i/12855048',
            'https://i.gkd.li/i/13228108',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-动态页[好友热播/为你推荐]',
      fastQuery: true,
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][visibleToUser=true][childCount=0] - [text="好友热播" || text="为你推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427',
            'https://i.gkd.li/i/12929620',
            'https://i.gkd.li/i/13387606',
            'https://i.gkd.li/i/14822579',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            '@[clickable=true] >2 [text="减少好友热播" || text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433',
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605',
            'https://i.gkd.li/i/14822576',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-登录授权',
      desc: '自动点击登录',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchRoot: true,
          actionMaximum: 3,
          actionCd: 500,
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
            'com.tencent.open.agent.QuickLoginAuthorityActivity',
          ],
          matches: [
            '[text="登录确认" || text$="申请使用"][visibleToUser=true]',
            'Button[text="登录" || text="同意" || text="确认"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20737721',
            'https://i.gkd.li/i/20737651',
            'https://i.gkd.li/i/20737675',
            'https://i.gkd.li/i/20737673',
            'https://i.gkd.li/i/22631619',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图，可手动取消勾选',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
            'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
          ],
          matches: '@CheckBox[checked=false] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12705556', // 未勾选原图
            'https://i.gkd.li/i/12705559', // 已勾选原图
            'https://i.gkd.li/i/13295142',
            'https://i.gkd.li/i/13476247',
          ],
        },
      ],
    },
    {
      key: 11,
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
      key: 12,
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
          preKeys: [0],
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12847821',
        },
      ],
    },
    {
      key: 13,
      name: '开屏广告-QQ小程序开屏广告',
      desc: '点击右下角跳过',
      fastQuery: true,
      actionMaximum: 1,
      priorityTime: 10000,
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
      ],
      rules: [
        {
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12877215',
            'https://i.gkd.li/i/12919195',
            'https://i.gkd.li/i/15130235',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.SplashActivity',
            '.upgrade.ui.dialog.UpgradeActivity',
            '.upgrade.activity.UpgradeActivity',
          ],
          matches:
            '@[desc="关闭"] <2 * >2 Button[text^="立即" || text="马上升级"][text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/13386719',
            'https://i.gkd.li/i/13526551',
            'https://i.gkd.li/i/22455760',
            'https://i.gkd.li/i/23393647',
          ],
        },
        {
          key: 1,
          activityIds: '.upgrade.activity.UpgradeActivity',
          matches: ['[text="立即升级"]', '[text="稍后处理"]'],
          snapshotUrls: 'https://i.gkd.li/i/14724108',
        },
      ],
    },
    {
      key: 18,
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
            '@ImageView[clickable=true][text=null][visibleToUser=true] - [text*="版本更新" || text="点击下载" || text="立即安装" || text="点击更新"][text.length<15]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255493',
            'https://i.gkd.li/i/13843140',
            'https://i.gkd.li/i/14138340',
            'https://i.gkd.li/i/13931212',
            'https://i.gkd.li/i/16323755',
            'https://i.gkd.li/i/17529150',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17920550',
        },
      ],
    },
    {
      key: 20,
      name: '分段广告-钱包页卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          ],
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13695087',
            'https://i.gkd.li/i/16685300',
          ],
        },
        {
          key: 1,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '@View[visibleToUser=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14231489',
        },
        {
          preKeys: [0, 1],
          key: 2,
          fastQuery: true,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13699701',
        },
      ],
    },
    {
      key: 22,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '[id="com.tencent.mobileqq:id/nca"]',
          snapshotUrls: 'https://i.gkd.li/i/14019384',
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
        },
        {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            // 限定
            'ViewGroup[desc="返回"] +2 ViewGroup[desc="首页"] + ViewGroup[desc="分享"]',
            'ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14549503',
        },
        {
          preKeys: [2],
          key: 3,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches:
            'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
        },
      ],
    },
    {
      key: 24,
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
      key: 25,
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
      ],
    },
    {
      key: 26,
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
      key: 27,
      name: '功能类-自动领取群聊红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] < RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][childCount=5][!(getChild(4).text^="已")] + TextView[text="拼手气红包"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: [
            'https://i.gkd.li/i/14221309',
            'https://i.gkd.li/i/18574530',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="拆红包"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: 'https://i.gkd.li/i/14221242',
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '@[desc="返回"] + [text="红包记录"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: 'https://i.gkd.li/i/14221279',
        },
      ],
    },
    {
      key: 28,
      name: '全屏广告-账号信息页面-新人SVIP领取弹窗',
      rules: [
        {
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches:
            '[childCount=3] > [desc*="活动"] + [desc^="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14217758',
            'https://i.gkd.li/i/14217783',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '功能类-申请入群后自动点击右上角关闭',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            'TextView[text="入群申请中"][visibleToUser=true]',
            'TextView[text="关闭"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/df526685-8a68-48cd-8328-0292079ff030',
          snapshotUrls: 'https://i.gkd.li/i/14235163',
        },
      ],
    },
    {
      key: 30,
      name: '局部广告-动态页-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchRoot: true,
          position: {
            left: 'width * 0.9534',
            top: 'width * 0.0805',
          },
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
          activityIds: [
            'com.qzone.reborn.base.QZoneTransparentShellActivity',
            'com.qzone.reborn.base.QZoneShellActivity',
          ],
          fastQuery: true,
          matches:
            '@[desc="关闭广告"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text="详情"]',
          exampleUrls: 'https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3',
          snapshotUrls: [
            'https://i.gkd.li/i/17009847',
            'https://i.gkd.li/i/17815694',
            'https://i.gkd.li/i/17827969',
          ],
        },
        {
          key: 4,
          name: '推荐你试试这些玩法',
          activityIds:
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          fastQuery: true,
          matches: '@[desc="关闭"] - [text="推荐你试试这些玩法"]',
          exampleUrls: 'https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a',
          snapshotUrls: 'https://i.gkd.li/i/18236745',
        },
      ],
    },
    {
      key: 31,
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
      key: 32,
      name: '其他-联系人页面-顶部可能认识的人推荐',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text="开启推荐，发现可能认识的人。"]',
          exampleUrls: 'https://e.gkd.li/7922ab73-cc99-4559-b18c-5ab54dd9633a',
          snapshotUrls: 'https://i.gkd.li/i/18237415',
        },
      ],
    },
  ],
});
