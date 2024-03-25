import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/65ee49f0-f3f2-4ef8-9f76-e832b0551b86',
          snapshotUrls: 'https://i.gkd.li/i/12534264',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-请求推送通知弹窗',
      desc: '请求推送通知弹窗，点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662213',
            'https://i.gkd.li/i/13327880',
          ],
        },
        {
          quickFind: true,
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
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662251',
            'https://i.gkd.li/i/13775651',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      quickFind: true,
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
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/12662345',
        },
      ],
    },
  ],
});
