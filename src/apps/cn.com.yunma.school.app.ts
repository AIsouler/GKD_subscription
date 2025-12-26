import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 1,
      name: '功能类-打开应用后自动点击右上角扫一扫',
      desc: '仅开屏后触发一次',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yunma.app.ui.main.MainActivity',
          matches: '[vid="fl_scan"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22451914',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-用水自动点击开始',
      rules: [
        {
          fastQuery: true,
          matchRoot: true, // 背景动画会持续产生无障碍事件
          activityIds: 'com.yunma.baseextend.ui.WebActivity',
          matches:
            '@TextView[text="开始"][childCount=0] < View[childCount=1] <<n WebView[text="立即用水"] <<2 [vid="web_parent_layout_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23327551',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches: '[vid="anythink_myoffer_btn_close_id"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3ddc6da8-7bbf-43f8-8d79-1fabe1180fea',
          snapshotUrls: 'https://i.gkd.li/i/23475779',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.yunma.baseextend.appupdate.view.UpdateDialogActivity',
          matches: ['[text^="发现新版本"]', '[vid="ib_close"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/24336659',
        },
      ],
    },
  ],
});
