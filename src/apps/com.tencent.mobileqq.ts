import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      enable: false,
      key: 0,
      name: '开屏广告',
      desc: '规则误触,待修复,需要快照准确定位',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '[text*=`跳过`]',
    },
    {
      enable: false,
      key: 1,
      name: '消息页面-顶部广告',
      desc: '规则误触,待修复,需要快照准确定位', // 当从聊天界面点击链接进入网页时会误触
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        '@[desc="关闭"][clickable=true] - LinearLayout > TextView[text!=null] + TextView[text!=null]', // 1687669217838
      ],
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12892726',
        'https://gkd-kit.songe.li/import/12774870',
      ],
    },
    {
      key: 2,
      name: '好友动态-广告卡片',
      activityIds: [
        'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
        'com.tencent.mobileqq.activity.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[desc="广告"] + ImageView[clickable=true]', // 1689050226722
          snapshotUrls: 'https://gkd-kit.songe.li/import/12847842',
        },
        {
          preKeys: 0,
          matches:
            '[clickable=true] > ImageView + TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12840889',
        },
      ],
    },
    {
      key: 3,
      name: '频道页面广告',
      rules: [
        {
          name: '弹窗广告',
          activityIds:
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          matches:
            'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642081',
        },
        {
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches:
            'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12708844',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '消息页面顶部-SVIP 广告',
      desc: '消息界面-搜索框和消息记录之间的广告卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        'LinearLayout > TextView[text*="SVIP"] + FrameLayout + [name$="ImageView"||name$="Button"][id!=null]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12706907',
        'https://gkd-kit.songe.li/import/12793359',
        'http://gkd-kit.songe.li/import/12855048',
      ],
    },
    {
      enable: false,
      key: 5,
      name: '好友热播',
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
            'https://gkd-kit.gitee.io/import/12721427', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://gkd-kit.songe.li/import/12894359', // com.tencent.mobileqq.activity.SplashActivity
          ],
        },
        {
          name: '点击[减少好友热播]',
          matches:
            'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12721433', // com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity
            'https://gkd-kit.songe.li/import/12894375', // com.tencent.mobileqq.activity.SplashActivity
          ],
        },
      ],
    },
    {
      key: 6,
      name: '动态广告卡片',
      desc: '点击右上角[广告]右侧的x按钮直接关闭',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        '@ImageView[clickable=true] - TextView[text="广告"] - [id="com.tencent.mobileqq:id/tv_name"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12749584',
    },
    {
      key: 7,
      name: '扫一扫-登录确认',
      quickFind: true,
      activityIds: 'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
      rules: 'Button[text="拒绝"] - Button[text="登录"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12789287',
    },
    {
      enable: false,
      key: 8,
      name: '消息页面顶部-无法接收新消息通知',
      desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: 'RelativeLayout > [text^="当前无法接收"] + ImageView',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12855441',
    },
    {
      key: 9,
      name: '我的等级-浮窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules:
        'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12914734',
    },
    {
      enable: false,
      key: 10,
      name: '自动勾选原图',
      desc: '发送图片时自动勾选原图',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '@CheckBox[checked=false] + [text="原图"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12705556', // 未勾选原图
        'https://gkd-kit.gitee.io/import/12705559', // 已勾选原图
      ],
    },
    {
      enable: false,
      key: 11,
      name: '自动查看原图',
      desc: '查看图片时自动点击原图',
      activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
      rules: '[desc="查看原图"][checked=false]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12840632', // 点击原图前
        'https://gkd-kit.songe.li/import/12840633', // 点击原图后
      ],
    },
    {
      enable: false,
      key: 12,
      name: 'QQ小世界评论区广告',
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
          snapshotUrls: 'https://gkd-kit.songe.li/import/12847819',
        },
        {
          preKeys: 0,
          matches:
            '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12847821',
        },
      ],
    },
    {
      key: 13,
      name: 'QQ小程序开屏广告',
      desc: '点击右下角跳过',
      activityIds: 'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
      rules: [
        {
          matches:
            'TextView[text = "广告"] < RelativeLayout + RelativeLayout TextView[text = "跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12877215',
        },
      ],
    },
    {
      key: 14,
      name: '黄钻-弹窗广告',
      activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
      rules:
        'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12914978',
        'https://gkd-kit.songe.li/import/12914886',
      ],
    },
  ],
});
