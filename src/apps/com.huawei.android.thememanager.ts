import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.thememanager',
  name: '华为主题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12657379',
            'https://i.gkd.li/i/13069736',
            'https://i.gkd.li/i/13762181',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.android.thememanager.HwThemeManagerActivity',
          matches: '[vid="iv_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2ca3890a-ef46-4f10-92ec-bfb921582a6a',
          snapshotUrls: 'https://i.gkd.li/i/16993275',
        },
        {
          key: 1,
          activityIds:
            'com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity',
          matches: '[vid="iv_vip_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5e5afbbf-b891-47f3-9543-48ceb3fd0104',
          snapshotUrls: 'https://i.gkd.li/i/16993276',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.android.thememanager.HwThemeManagerActivity',
          matches:
            '[vid="pps_label_ll" || vid="announce_ad_close_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/04d831b8-0a98-4b3a-9ecc-f9026c1d7f2c',
          snapshotUrls: [
            'https://i.gkd.li/i/16992846',
            'https://i.gkd.li/i/16993185',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.huawei.android.thememanager.mvp.view.activity.onlinetheme.OnlineThemePreviewActivity',
          matches:
            '@LinearLayout[clickable=true] < LinearLayout -2 LinearLayout >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/1f3cecca-2339-4271-873e-5ecb65263a8a',
          snapshotUrls: 'https://i.gkd.li/i/16993229',
        },
        {
          key: 2,
          activityIds:
            'com.huawei.android.thememanager.mvp.view.activity.onlinefont.OnlineFontPreviewActivity',
          matches: '[vid="download_pps_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8bace857-9eb3-4b6a-83b7-34328a3f96eb',
          snapshotUrls: 'https://i.gkd.li/i/16993406',
        },
        {
          preKeys: [0, 1, 2],
          activityIds: [
            'com.huawei.openalliance.ad.activity.FeedbackActivity',
            '.HwThemeManagerActivity',
          ],
          anyMatches: [
            '[text="直接关闭"]',
            '@[clickable=true] >2 [text="不感兴趣"]',
          ],
          exampleUrls: [
            'https://e.gkd.li/93458efb-d891-46b3-a2a0-8629a0399731',
            'https://e.gkd.li/0e72693d-4ad3-4efd-b469-5aa635dd958b',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16992845',
            'https://i.gkd.li/i/16993186',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-首页活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.huawei.android.thememanager.HwThemeManagerActivity',
            'com.huawei.android.launcher.unihome.UniHomeLauncher',
          ],
          matches:
            '[id="com.huawei.android.thememanager:id/campaign_dialog_close_image"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12657939',
            'https://i.gkd.li/i/12667815',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/12727318',
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] < * - * >n [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/i/12918192',
    },
  ],
});
