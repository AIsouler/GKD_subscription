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
      rules: [
        {
          excludeActivityIds: [
            '.activity.ChatActivity', // 在聊天界面禁用
            '.search.activity.UniteSearchActivity', // 在搜索页面禁用
          ],
          excludeMatches: '[vid="root"]', // 在聊天界面禁用，若排除EditText[vid="input"]则滑动消息时会造成误触
          matches: 'TextView[text^="跳过"][text.length<=10][!(vid="title")]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13217807',
            'https://i.gkd.li/i/13856647',
            'https://i.gkd.li/i/13868177',
            'https://i.gkd.li/i/14341023',
            'https://i.gkd.li/i/15334565',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '好友动态详情页广告',
          fastQuery: true,
          activityIds: [
            'com.qzone.reborn.base.QZoneTransparentShellActivity',
            'com.qzone.reborn.base.QZoneShellActivity',
          ],
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
          key: 1,
          name: '推荐你试试这些玩法',
          activityIds:
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          fastQuery: true,
          matches: '@[desc="关闭"] - [text="推荐你试试这些玩法"]',
          exampleUrls: 'https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a',
          snapshotUrls: 'https://i.gkd.li/i/18236745',
        },
        {
          key: 2,
          name: '消息列表页面顶部广告1',
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches:
            '@ImageView[desc="关闭"][clickable=true][childCount=0] -2 [text$="试用超级会员"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23837678',
        },
        {
          key: 3,
          name: '消息列表页面顶部广告2',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '@ImageView[desc="关闭"][clickable=true] <n RelativeLayout - RelativeLayout >3 ImageView[desc="快捷入口"]',
          snapshotUrls: 'https://i.gkd.li/i/24230528',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
            '.guild.base.QPublicFragmentActivityForMainWebActivity',
          ],
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/21947672',
            'https://i.gkd.li/i/24404962',
          ],
        },
        {
          key: 1,
          activityIds: '.activity.SplashActivity',
          matches:
            '@[desc="更多"][clickable=true] - [desc="广告"][visibleToUser=true] - LinearLayout > [text="今天"]',
          snapshotUrls: 'https://i.gkd.li/i/24381585',
        },
        {
          preKeys: [0, 1],
          activityIds: [
            'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
            '.activity.SplashActivity',
            '.guild.base.QPublicFragmentActivityForMainWebActivity',
          ],
          matches: '@[clickable=true] >(1,2) [text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/21947698',
            'https://i.gkd.li/i/24381598',
            'https://i.gkd.li/i/24406932',
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
            '.activity.SplashActivity',
            'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
            '.activity.photo.album.NewPhotoListActivity',
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
      name: '功能类-自动点击查看原图',
      desc: '查看图片时自动点击原图',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
          anyMatches: [
            '[text^="查看原图"][clickable=true][visibleToUser=true]',
            '@[clickable=true] > [text^="查看原图"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14757735',
            'https://i.gkd.li/i/24489364',
          ],
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
      rules: [
        {
          activityIds: [
            '.mini.appbrand.ui.AppBrandUI',
            '.activity.miniaio.MiniChatActivity',
          ],
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
          activityIds: '.activity.SplashActivity',
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
      key: 24,
      name: '局部广告-聊天页面广告',
      rules: [
        {
          key: 1,
          name: '关键词广告',
          fastQuery: true,
          activityIds: [
            '.profilecard.activity.FriendProfileCardActivity',
            '.activity.ChatActivity',
            '.activity.SplashActivity',
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
      key: 27,
      name: '功能类-自动领取群聊红包',
      desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="已")] + TextView[text="拼手气红包"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: [
            'https://i.gkd.li/i/14221309',
            'https://i.gkd.li/i/18574530',
            'https://i.gkd.li/i/18725007',
            'https://i.gkd.li/i/24551887',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity',
          ],
          anyMatches: [
            '@[desc="关闭"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="来晚一步"][visibleToUser=true]',
            '[desc="拆红包"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: [
            'https://i.gkd.li/i/14221242',
            'https://i.gkd.li/i/18724880',
            'https://i.gkd.li/i/24551748',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          fastQuery: true,
          activityIds: [
            'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
            'com.tencent.biz.TenpayActivity',
          ],
          matches: '@[desc="返回"] +n [text="红包记录"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: [
            'https://i.gkd.li/i/14221279',
            'https://i.gkd.li/i/24551886',
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
          activityIds: '.activity.QQBrowserActivity',
          matches: [
            'TextView[text="入群申请中"][visibleToUser=true]',
            'TextView[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14235163',
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
    {
      key: 33,
      name: '功能类-自动解锁 Windows QQ',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.tencent.biz.qrcode.activity.UnlockPCQuickVerifyActivity',
          matches: '[text="解锁"]',
          snapshotUrls: 'https://i.gkd.li/i/15360265',
        },
      ],
    },
    {
      key: 34,
      name: '功能类-关闭体验模式提醒',
      desc: '点击[我知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.QPublicFragmentActivity',
          matches: [
            '[text^="当前处于"][text*="体验模式"][visibleToUser=true]',
            '[text="我知道了"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24561058',
        },
      ],
    },
    {
      key: 35,
      name: '功能类-自动跳转第三方应用',
      desc: '点击[允许]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.QQBrowserActivity',
          matches: [
            '[text$="打开其他应用"]',
            '[text="允许"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25142977',
        },
      ],
    },
  ],
});
