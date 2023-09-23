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
      key: 1,
      name: '消息页面-顶部广告',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: [
        'ImageView[id!=null][desc="关闭"][clickable=true]', // 1687669217838
      ],
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
      name: '频道页面-广告弹窗',
      activityIds:
        'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
      rules: ['ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]'],
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12642081'],
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
