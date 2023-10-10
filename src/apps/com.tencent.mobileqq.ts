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
      desc: '规则误触,待修复,需要快照准确定位',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        'ImageView[id!=null][desc="关闭"][clickable=true]', // 1687669217838
      ],
      snapshotUrls: 'https://gkd-kit.songe.li/import/12774870',
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
      desc: '消息界面-搜索框和消息记录直接的广告卡片,点击关闭右侧x',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules:
        'LinearLayout > TextView[text*="SVIP"] + FrameLayout + ImageView[id!=null]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12706907',
        'https://gkd-kit.songe.li/import/12793359',
      ],
    },
    {
      enable: false,
      key: 5,
      name: '好友热播',
      desc: '好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭',
      activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      rules: [
        {
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches:
            'TextView[text="好友热播"] + Button[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12721427',
        },
        {
          name: '点击[减少好友热播]',
          matches:
            'TextView[text="减少好友热播"] <2 LinearLayout < LinearLayout[id^="com.tencent.mobileqq.qzone_df_impl:id/"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12721433',
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
      activityIds: 'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
      rules: 'Button[text="拒绝"] - Button[text="登录"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12789287',
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
  ],
});
