import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
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
          matches: '[vid="campaign_dialog_close_image_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3',
          snapshotUrls: [
            'https://i.gkd.li/i/14193738',
            'https://i.gkd.li/i/15523958',
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
  ],
});
