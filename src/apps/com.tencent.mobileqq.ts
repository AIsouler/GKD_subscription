import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  deprecatedKeys: [6],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      excludeActivityIds: [
        'com.tencent.mobileqq.activity.ChatActivity', // 在聊天界面禁用
        'com.tencent.mobileqq.search.activity.UniteSearchActivity', // 在搜索页面禁用
        'com.tencent.mobileqq.activity.SplashActivity', // 在聊天界面禁用
      ],
      rules: {
        excludeMatches: '[vid="chat_item_content_layout"]', // 在聊天界面禁用
        matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
      },
      snapshotUrls: [
        'https://i.gkd.li/i/13062244',
        'https://i.gkd.li/i/13093155',
        'https://i.gkd.li/i/13207731',
        'https://i.gkd.li/i/13217807', // 避免在聊天界面误触
        'https://i.gkd.li/i/13856647', // 误触
        'https://i.gkd.li/i/13868177', // 误触
        'https://i.gkd.li/i/14341023', // 误触
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
          quickFind: true,
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
          exampleUrls:
            'https://m.gkd.li/57941037/3922e10b-ed7e-41c0-955c-88189876548d',
          snapshotUrls: [
            'https://i.gkd.li/i/14155603',
            'https://i.gkd.li/i/14217033',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-好友动态-广告卡片',
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
          quickFind: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13761147',
            'https://i.gkd.li/i/13849730',
          ],
        },
        {
          key: 3,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches:
            '[id="com.tencent.mobileqq:id/tv_name"] + TextView[text="广告"] + @ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12749584',
            'https://i.gkd.li/i/13627967',
          ],
        },
        {
          preKeys: [0, 1],
          key: 4,
          activityIds: [
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
            'com.tencent.mobileqq.activity.SplashActivity',
          ],
          quickFind: true,
          matches: '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840889',
            'https://i.gkd.li/i/13831867', //activityId: 'com.tencent.mobileqq.activity.SplashActivity'
            'https://i.gkd.li/i/14138571',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-频道页面广告',
      rules: [
        {
          name: '弹窗广告',
          quickFind: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          ],
          matches:
            'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206663', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/i/12642081', // com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog
          ],
        },
        {
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708844',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
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
      key: 5,
      name: '局部广告-动态页好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches:
            'TextView[text="好友热播"] + Button[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721427', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/i/12894359', // com.tencent.mobileqq.activity.SplashActivity
          ],
        },
        {
          name: '点击[减少好友热播]',
          matches:
            'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12721433', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/i/12894375', // com.tencent.mobileqq.activity.SplashActivity
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-扫一扫登录确认',
      desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: 'PC 登录确认',
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
          ],
          matches:
            'TextView[text="登录确认"||text="一键验证"] <n * +n * >n Button[text*="登录"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13623520',
            'https://i.gkd.li/i/12789287',
            'https://i.gkd.li/i/13063027',
          ],
        },
        {
          key: 2,
          name: 'QQ 互联登录确认',
          activityIds: [
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches: 'Button[text="拒绝"] - Button[text="登录"]',
          snapshotUrls: ['https://i.gkd.li/i/13166314'],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-消息页面顶部"无法接收新消息通知"',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/12855441',
    },
    {
      key: 9,
      name: '局部广告-我的等级页面浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules:
        'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
      snapshotUrls: 'https://i.gkd.li/i/12914734',
    },
    {
      key: 10,
      name: '功能类-自动勾选原图',
      desc: '发送图片时自动勾选原图',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
      ],
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12705556', // 未勾选原图
        'https://i.gkd.li/i/12705559', // 已勾选原图
        'https://i.gkd.li/i/13295142', // com.tencent.qqnt.qbasealbum.WinkHomeActivity
        'https://i.gkd.li/i/13476247', // com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity
      ],
    },
    {
      key: 11,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
      rules: '[desc="查看原图"][checked=false]',
      snapshotUrls: [
        'https://i.gkd.li/i/12840632', // 点击原图前
        'https://i.gkd.li/i/12840633', // 点击原图后
      ],
    },
    {
      key: 12,
      name: '局部广告-QQ小世界评论区广告',
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
      key: 13,
      name: '开屏广告-QQ小程序开屏广告',
      desc: '点击右下角跳过',
      activityIds: [
        'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
        'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
      ],
      rules: [
        {
          matches:
            'TextView[text = "广告"] < RelativeLayout + RelativeLayout TextView[text = "跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12877215',
            'https://i.gkd.li/i/12919195',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-黄钻页面弹窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules:
        'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12914978',
        'https://i.gkd.li/i/12914886',
      ],
    },
    {
      key: 15,
      name: '局部广告-好友动态页面"为你推荐"',
      quickFind: true,
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
            'https://i.gkd.li/i/13387606', // activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12929619',
            'https://i.gkd.li/i/13387605', //
          ],
        },
      ],
    },
    {
      key: 17,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - ViewGroup > [text="立即体验"||text="立即升级"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13188721',
        'https://i.gkd.li/i/13386719',
        'https://i.gkd.li/i/13459507',
      ],
    },
    {
      key: 18,
      name: '更新提示-消息页面-顶部',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '[text*="版本更新" || text*="点击下载"] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13188722',
            'https://i.gkd.li/i/13255493', //desc值为null快照
            'https://i.gkd.li/i/13843140', //关系选择器为-2快照
            'https://i.gkd.li/i/14138340',
            'https://i.gkd.li/i/13931212',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '更新提示-内测邀请弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '@ImageView[desc="关闭"] <2 * >2 [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/i/13526551',
        },
      ],
    },
    {
      key: 20,
      name: '分段广告-钱包页卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          quickFind: true,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13695087',
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
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          quickFind: true,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13699701',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-首页广告弹窗',
      activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
      rules: [
        {
          key: 0,
          name: '元梦之星广告弹窗',
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
      key: 22,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '[id="com.tencent.mobileqq:id/nca"]',
          snapshotUrls: 'https://i.gkd.li/i/14019384',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
        },
        {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
            // 限定
            'ViewGroup[desc="返回"]',
            'ViewGroup[desc="首页"]',
            'ViewGroup[desc="分享"]',
            'ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14549503',
        },
        {
          preKeys: 2,
          key: 3,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches:
            'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-新春回馈礼弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
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
      key: 24,
      name: '局部广告-聊天页面广告',
      rules: [
        {
          key: 0,
          name: '集福卡活动卡片',
          quickFind: true,
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
          name: '开福袋浮层广告',
          quickFind: true,
          activityIds:
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > TextView[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131',
          snapshotUrls: 'https://i.gkd.li/i/14183188',
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
          quickFind: true,
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
          activityIds:
            'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[desc="关闭浮层"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c56c0d50-48b7-4649-9460-d40b73d3594e',
          snapshotUrls: 'https://i.gkd.li/i/14345395',
        },
      ],
    },
    {
      key: 26,
      name: '全屏广告-腾讯文档页面-"使用App"弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity',
          matches:
            '[id="com.tencent.mobileqq:id/webview"] >3 View[childCount=14] > View[index=8] > View > TextView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb',
          snapshotUrls: 'https://i.gkd.li/i/14188983',
        },
      ],
    },
    {
      key: 27,
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
            'ImageView <<2 FrameLayout +2 * >3 TextView[text*="红包"] - @ViewGroup[childCount=5] > TextView[text!="已领取"]',
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
          quickFind: true,
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
      activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
      rules: '[childCount=3] > [desc*="活动"] + [desc^="关闭"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/14217758',
        'https://i.gkd.li/i/14217783',
      ],
    },
    {
      key: 29,
      name: '功能类-申请入群后自动点击右上角关闭',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: 'RelativeLayout[childCount=2] > [text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/df526685-8a68-48cd-8328-0292079ff030',
          snapshotUrls: 'https://i.gkd.li/i/14235163',
        },
      ],
    },
  ],
});
