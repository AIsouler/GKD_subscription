import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20773821',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-播放界面直播浮窗',
      fastQuery: true,
      activityIds: 'com.android.mediacenter.MainActivity',
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13067649',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.android.mediacenter.PageActivity',
            'com.android.mediacenter.MainActivity',
          ],
          matches:
            'ImageView[vid="campaign_dialog_close_image_view" || vid="iv_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3',
          snapshotUrls: [
            'https://i.gkd.li/i/14193738',
            'https://i.gkd.li/i/15523958',
            'https://i.gkd.li/i/24676040',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.android.mediacenter.MainActivity',
          matches:
            'RelativeLayout[childCount=2] + * [vid="close_radio_camp_button"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b205c209-07c9-49e1-b72d-f9b31d9bc2d9',
          snapshotUrls: 'https://i.gkd.li/i/14193767',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[vid="ad_close"]',
          exampleUrls: 'https://e.gkd.li/586d860f-7f7c-41c7-af0f-bc17ac695a1a',
          snapshotUrls: 'https://i.gkd.li/i/16812666',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-首页横幅广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[vid="ad_more_layout"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c64216a4-46bc-461d-9973-9ffcfab2fd51',
          snapshotUrls: 'https://i.gkd.li/i/20745787',
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches: '[text="直接关闭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9c4da3cf-897d-4b4a-bda0-e5e35af19b1d',
          snapshotUrls: 'https://i.gkd.li/i/20745789',
        },
      ],
    },
  ],
});
