import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048443',
            'https://i.gkd.li/i/15048416',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.9055',
            top: 'width * 0.1611',
          },
          excludeMatches: '[text*="跳过"]',
          matches: '[vid="native_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15048354',
            'https://i.gkd.li/i/15048376', // 防止在此页面提前触发规则
          ],
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-视频详情页广告',
      rules: [
        {
          key: 0,
          name: '点击关闭-1',
          activityIds:
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          quickFind: true,
          matches:
            '[id="com.xunlei.downloadprovider:id/hermes_ad_banner_negative"]',
          snapshotUrls: 'https://i.gkd.li/i/12707701',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击不感兴趣',
          activityIds: [
            'com.xunlei.downloadprovider.frame.MainTabActivity',
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
            'com.xunlei.downloadprovider.feedback.view',
          ],
          quickFind: true,
          matches:
            '[id="com.xunlei.downloadprovider:id/feedback_not_interested_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625418',
            'https://i.gkd.li/i/12707717',
            'https://i.gkd.li/i/12707702',
          ],
        },
        {
          key: 2,
          name: '点击关闭-2',
          activityIds: 'com.xunlei.downloadprovider.feedback.view',
          quickFind: true,
          matches: '[id="com.xunlei.downloadprovider:id/ad_ima_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/12882988',
        },
        {
          key: 3,
          name: '点击关闭-3',
          activityIds:
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          quickFind: true,
          matches:
            '[id="com.xunlei.downloadprovider:id/play_detail_ad_title"] + [id="com.xunlei.downloadprovider:id/close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13228423',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-视频详情页直播推荐',
      desc: '自动点击"减少推荐"',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds:
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          matches:
            '[id="com.xunlei.downloadprovider:id/title_tv"] + [id="com.xunlei.downloadprovider:id/more"]',
          snapshotUrls: 'https://i.gkd.li/i/12707701',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: [
            'com.xunlei.downloadprovider.download.center.newcenter',
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          ],
          matches: '[id="com.xunlei.downloadprovider:id/close_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12707710',
            'https://i.gkd.li/i/14005330',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-应用内弹窗广告',
      desc: '⚠ 此规则容易误触，因此默认关闭。',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.xunlei.downloadprovider.frame.MainTabActivity',
            'com.xunlei.downloadprovider.launch.LaunchActivity',
          ],
          matches: '@[text="关闭"] +n * >n [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12868648',
            'https://i.gkd.li/i/12879372',
            'https://i.gkd.li/i/12882366',
            'https://i.gkd.li/i/12892871',
            'https://i.gkd.li/i/13799878',
          ],
        },

        // 字节广告
        {
          key: 10,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'Image[text=""] < @View + View +n View > View > TextView[text$="广告"][text.length<=10]',
          actionDelay: 1000,
          snapshotUrls: [
            'https://i.gkd.li/i/12868667',
            'https://i.gkd.li/i/12881946',
            'https://i.gkd.li/i/13295179',
          ],
        },

        // 腾讯广告
        {
          key: 20,
          activityIds: [
            'com.xunlei.downloadprovider.frame.MainTabActivity',
            'com.xunlei.downloadprovider.launch.LaunchActivity',
          ],
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12882132',
            'https://i.gkd.li/i/12901374',
          ],
        },
        {
          key: 21,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12882166',
        },
        {
          key: 22,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12882237',
        },
        {
          key: 23,
          activityIds:
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          quickFind: true,
          matches:
            '[id="com.xunlei.downloadprovider:id/hermes_ad_banner_negative"]',
          snapshotUrls: 'https://i.gkd.li/i/13597068',
        },

        // 快手广告
        {
          key: 30,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882199', // n = 1
            'https://i.gkd.li/i/12881911', // n = 2
            'https://i.gkd.li/i/12892912', // 点击目标为具备 clickable=true 的 ViewGroup，防止在这个快照中点击到下落的礼物
            'https://i.gkd.li/i/12881976', // 限定 visibleToUser=true，防止在这个快照中误触
          ],
        },
        {
          key: 31,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[text="广告"] <2 ViewGroup -2 ViewGroup >n [text="跳过"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12881976',
        },
        {
          key: 32,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + TextView[text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13761275',
        },
        {
          key: 2,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'TextView[text="广告"] <n ViewGroup -2 ViewGroup > @ViewGroup',
          snapshotUrls: 'https://i.gkd.li/i/12879452',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-"下载页"广告卡片',
      desc: '需选二次弹窗关闭原因',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击更多"···"',
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches: '[id="com.xunlei.downloadprovider:id/ad_more"]',
          snapshotUrls: 'https://i.gkd.li/i/12881865',
        },
        {
          key: 1,
          name: '点击"x"',
          activityIds: [
            'com.xunlei.downloadprovider.frame.MainTabActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches: '[id="com.xunlei.downloadprovider:id/btn_ad_feedback"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12892893',
            'https://i.gkd.li/i/12901395',
          ],
        },
        {
          preKeys: [0, 1],
          name: '关闭原因选"减少推荐"',
          key: 2,
          activityIds: [
            'com.xunlei.downloadprovider.download.center.newcenter',
            'com.xunlei.downloadprovider.frame.MainTabActivity',
          ],
          matches: '[id="com.xunlei.downloadprovider:id/close_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/128818775',
            'https://i.gkd.li/i/13198070',
            'https://i.gkd.li/i/13484249',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-搜索页面顶部广告',
      quickFind: true,
      activityIds:
        'com.xunlei.downloadprovider.search.ui.search.SearchOperateActivity',
      rules: '[id="com.xunlei.downloadprovider:id/search_banner_ad_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12882892',
    },
    {
      key: 6,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.xunlei.downloadprovider:id/x_upgrade_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13228920',
    },
    {
      key: 10,
      name: '全屏广告-会员续费广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '"我的"',
          activityIds: [
            'com.xunlei.downloadprovider.homepage.member',
            'com.xunlei.downloadprovider.frame.MainTabActivity',
          ],
          matches:
            '@[id="com.xunlei.downloadprovider:id/close_btn"] - LinearLayout [text="您的会员已过期"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12707698',
            'https://i.gkd.li/i/13448909',
          ],
        },
        {
          key: 1,
          name: '"下载页"1',
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[id="com.xunlei.downloadprovider:id/all_picture_image"] + [id="com.xunlei.downloadprovider:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12882928',
        },
        {
          key: 3,
          name: '"首页"',
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[text="您的会员已过期"] < LinearLayout +n [id="com.xunlei.downloadprovider:id/touch_bottom_bar_bubble_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13259268',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[((text$="领取" || text^="立即") && text.length<5) || text^="此云盘为您的私人云盘"] <n * > [vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12882939',
            'https://i.gkd.li/i/15048352',
            'https://i.gkd.li/i/15048355',
            'https://i.gkd.li/i/15048357',
          ],
        },
      ],
    },
  ],
});
