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
      rules: [
        {
          activityIds:
            'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          matches:
            '[clickable=true] > ImageView + TextView[text="关闭此条广告"]', // 1689050230463
        },
        {
          activityIds:
            'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          matches: 'View[desc="广告"] + ImageView[clickable=true]', // 1689050226722
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
      rules: ['@CheckBox[checked=false] + [text="原图"]'],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12705556', // 未勾选原图
        'https://gkd-kit.gitee.io/import/12705559', // 已勾选原图
      ],
    },
  ],
});
