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
          matches: '[vid="hiad_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/i/15443502',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-广告反馈下拉窗',
      fastQuery: true,
      activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/label_title"][text="直接关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067574',
            'https://i.gkd.li/i/13067572',
            'https://i.gkd.li/i/13067571',
            'https://i.gkd.li/i/13067659',
            'https://i.gkd.li/i/13067665',
            'https://i.gkd.li/i/13067820',
          ],
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
      key: 4,
      name: '局部广告-播放（音乐、视频）页面广告',
      fastQuery: true,
      activityIds: 'com.android.mediacenter.MainActivity',
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/ad_icon"&&visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067956',
            'https://i.gkd.li/i/13067978',
            'https://i.gkd.li/i/13067387',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-评论区广告',
      fastQuery: true,
      activityIds: 'com.android.mediacenter.comment.ui.CommentListMainActivity',
      rules: [
        {
          matches: '[id="com.huawei.music:id/ad_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13067937',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-视频播放页广告反馈',
      fastQuery: true,
      activityIds: 'com.android.mediacenter.MainActivity',
      rules: [
        {
          matches: 'TextView[text="不感兴趣"][id$="title"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13067986',
            'https://i.gkd.li/i/13067981',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-播放器上滑广告',
      fastQuery: true,
      activityIds: 'com.android.mediacenter.MainActivity',
      rules: [
        {
          matches:
            'ViewGroup > TextView[text="广告"][id$="ad_icon"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13068935',
            'https://i.gkd.li/i/13194163', // 避免在此规则误触
            'https://i.gkd.li/i/13263590', // visibleToUser
          ],
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
