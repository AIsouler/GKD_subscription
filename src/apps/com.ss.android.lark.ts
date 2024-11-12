import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.lark',
  name: '飞书',
  groups: [
    {
      key: 1,
      name: '功能类-桌面端登录确认',
      fastQuery: true,
      activityIds:
        'com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity',
      rules:
        '[text="飞书 桌面端登录确认"] +2 [id="com.ss.android.lark:id/login_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13494960',
    },
    {
      key: 10,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击"查看原图"',
      activityIds:
        'com.ss.android.lark.widget.photo.preview.PhotoPagerActivity',
      fastQuery: true,
      rules: '[id="com.ss.android.lark:id/look_origin_icon"]',
      snapshotUrls: 'https://i.gkd.li/i/12840528',
    },
    {
      key: 11,
      name: '功能类-自动发送原图',
      desc: '发送图片时自动勾选"原图"',
      actionMaximum: 1, // 勾选节点 checkable=false，无法区分勾选前后 https://i.gkd.li/i/17711293
      rules: [
        {
          fastQuery: true,
          activityIds: '.chatwindow.ChatWindowActivity',
          matches: '[vid="layout_original_photo"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c985a1e9-ea40-4911-a73f-8ef098909bce',
          snapshotUrls: 'https://i.gkd.li/i/17711351',
        },
      ],
    },
  ],
});
