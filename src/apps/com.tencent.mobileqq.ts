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
      ],
      rules: {
        excludeMatches: '[vid="chat_item_content_layout"]', // 在聊天界面禁用
        matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
      },
      snapshotUrls: [
        'https://i.gkd.li/import/13062244',
        'https://i.gkd.li/import/13093155',
        'https://i.gkd.li/import/13207731',
        'https://i.gkd.li/import/13217807', // 避免在聊天界面误触
        'https://i.gkd.li/import/13856647', // 误触
        'https://i.gkd.li/import/13868177', // 误触
      ],
    },
    {
      enable: false,
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
            'https://i.gkd.li/import/12892726',
            'https://i.gkd.li/import/12774870',
            'https://i.gkd.li/import/13207766',
            'https://i.gkd.li/import/13386518',
          ],
        },
        {
          key: 1,
          name: '消息页面-顶部惊喜礼包',
          matches:
            '[text*="惊喜礼包"] + FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13426912',
        },
        {
          key: 2,
          matches:
            'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13476400',
        },
        {
          key: 3,
          name: '稀有龙鹅卡掉落',
          matches:
            'RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/3922e10b-ed7e-41c0-955c-88189876548d',
          snapshotUrls: 'https://i.gkd.li/import/14155603',
        },
      ],
    },
    {
      enable: false,
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
            'https://i.gkd.li/import/12847842',
            'https://i.gkd.li/import/13787345',
          ],
        },
        {
          key: 1,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '[desc="广告 展开 按钮"] > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14138572',
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
            'https://i.gkd.li/import/13761147',
            'https://i.gkd.li/import/13849730',
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
            'https://i.gkd.li/import/12749584',
            'https://i.gkd.li/import/13627967',
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
            'https://i.gkd.li/import/12840889',
            'https://i.gkd.li/import/13831867', //activityId: 'com.tencent.mobileqq.activity.SplashActivity'
            'https://i.gkd.li/import/14138571',
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
            'https://i.gkd.li/import/13206663', // com.tencent.mobileqq.activity.SplashActivity
            'https://i.gkd.li/import/12642081', // com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog
          ],
        },
        {
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12708844',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '局部广告-顶部SVIP广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12706907',
        'https://i.gkd.li/import/13107298',
        'https://i.gkd.li/import/12793359',
        'https://i.gkd.li/import/12855048',
        'https://i.gkd.li/import/13228108',
      ],
    },
    {
      enable: false,
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
            'https://i.gkd.li/import/12721427', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/import/12894359', // com.tencent.mobileqq.activity.SplashActivity
          ],
        },
        {
          name: '点击[减少好友热播]',
          matches:
            'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12721433', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://i.gkd.li/import/12894375', // com.tencent.mobileqq.activity.SplashActivity
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
            'https://i.gkd.li/import/13623520',
            'https://i.gkd.li/import/12789287',
            'https://i.gkd.li/import/13063027',
          ],
        },
        {
          key: 2,
          name: 'QQ 互联登录确认',
          activityIds: [
            'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches: 'Button[text="拒绝"] - Button[text="登录"]',
          snapshotUrls: ['https://i.gkd.li/import/13166314'],
        },
      ],
    },
    {
      enable: false,
      key: 8,
      name: '功能类-消息页面顶部"无法接收新消息通知"',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12855441',
    },
    {
      key: 9,
      name: '局部广告-我的等级页面浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules:
        'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
      snapshotUrls: 'https://i.gkd.li/import/12914734',
    },
    {
      enable: false,
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
        'https://i.gkd.li/import/12705556', // 未勾选原图
        'https://i.gkd.li/import/12705559', // 已勾选原图
        'https://i.gkd.li/import/13295142', // com.tencent.qqnt.qbasealbum.WinkHomeActivity
        'https://i.gkd.li/import/13476247', // com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity
      ],
    },
    {
      enable: false,
      key: 11,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
      rules: '[desc="查看原图"][checked=false]',
      snapshotUrls: [
        'https://i.gkd.li/import/12840632', // 点击原图前
        'https://i.gkd.li/import/12840633', // 点击原图后
      ],
    },
    {
      enable: false,
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
          snapshotUrls: 'https://i.gkd.li/import/12847819',
        },
        {
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12847821',
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
            'https://i.gkd.li/import/12877215',
            'https://i.gkd.li/import/12919195',
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
        'https://i.gkd.li/import/12914978',
        'https://i.gkd.li/import/12914886',
      ],
    },
    {
      enable: false,
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
            'https://i.gkd.li/import/12929620',
            'https://i.gkd.li/import/13387606', // activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12929619',
            'https://i.gkd.li/import/13387605', //
          ],
        },
      ],
    },
    {
      key: 17,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - ViewGroup > [text="立即体验"||text="立即升级"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13188721',
        'https://i.gkd.li/import/13386719',
        'https://i.gkd.li/import/13459507',
      ],
    },
    {
      enable: false,
      key: 18,
      name: '更新提示-消息页面-顶部',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            '[text*="版本更新" || text*="点击下载"] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13188722',
            'https://i.gkd.li/import/13255493', //desc值为null快照
            'https://i.gkd.li/import/13843140', //关系选择器为-2快照
            'https://i.gkd.li/import/14138340',
            'https://i.gkd.li/import/13931212',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 19,
      name: '更新提示-内测邀请弹窗',
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView[desc="关闭"] <2 * >2 [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/import/13526551',
        },
      ],
    },
    {
      enable: false,
      key: 20,
      name: '分段广告-钱包页卡片广告',
      quickFind: true,
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13695087'],
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: ['https://i.gkd.li/import/13699701'],
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-首页广告弹窗',
      rules: [
        {
          key: 0,
          name: '元梦之星广告弹窗',
          activityIds:
            'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches:
            'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13797876',
        },
      ],
    },
    {
      key: 22,
      name: '分段广告-天气页卡片广告',
      desc: '点击关闭-点击关闭此条广告',
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
      rules: [
        {
          key: 0,

          matches: '[id="com.tencent.mobileqq:id/nca"]',
          snapshotUrls: 'https://i.gkd.li/import/14019384',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14019401',
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
            'https://i.gkd.li/import/14134934',
            'https://i.gkd.li/import/14151820', // 误触快照
          ],
        },
      ],
    },
  ],
});
