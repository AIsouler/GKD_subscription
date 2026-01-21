import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter', // https://github.com/AIsouler/GKD_subscription/issues/1109
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16335136',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8731',
            top: 'width * 0.1352',
          },
          matches:
            '@FrameLayout[childCount=2] > [vid="ll_top_right"][childCount=0]',
          exampleUrls: 'https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52',
          snapshotUrls: 'https://i.gkd.li/i/20903074',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16335136',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: '[text="暂不更新"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/130e0c2e-f568-4a96-9c06-9876a21e0466',
          snapshotUrls: 'https://i.gkd.li/i/18271745',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '请求推送通知弹窗，点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
          matches: ['[text*="开启推送通知"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13327880',
        },
        {
          key: 1,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/13775652',
        },
      ],
    },
    {
      key: 11,
      name: '权限提示-请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.mc10086.cmcc.view.tabs.AppTabFragment',
        'com.mc10086.cmcc.base.StartPageActivity',
      ],
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662251',
            'https://i.gkd.li/i/13775651',
            'https://i.gkd.li/i/15944173',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662265',
        },
        {
          key: 1,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: '[vid="close_btn_bottom"]',
          exampleUrls:
            'https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c',
          snapshotUrls: 'https://i.gkd.li/i/14570369',
        },
        {
          key: 2,
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            '[text="余量查询"] > View > View > @Image[clickable=true][text!=null] <<n [vid="patmentwebview"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6',
          snapshotUrls: 'https://i.gkd.li/i/14738550',
        },
      ],
    },
    {
      key: 13,
      name: '评价提示-请求好评弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/12662345',
        },
      ],
    },
    {
      key: 14,
      name: '权限提示-通讯录权限申请弹窗',
      desc: '点击取消',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cmccit.paycenter.PayCenterActivity',
          matches: ['[text="通讯录权限申请"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/7d332325-497f-47a4-a322-729ffa5dd121',
          snapshotUrls: 'https://i.gkd.li/i/16369235',
        },
      ],
    },
    {
      key: 15,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: [
            '[text^="位置权限" || text$="定位权限"]',
            '[text="取消"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23445705',
        },
      ],
    },
  ],
});
