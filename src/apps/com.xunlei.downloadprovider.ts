import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xunlei.downloadprovider.launch.LaunchActivity',
      rules: 'TextView[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12707693',
    },
    {
      key: 1,
      name: '视频详情页广告',
      activityIds:
        'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.xunlei.downloadprovider:id/hermes_ad_banner_negative"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12707701',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.xunlei.downloadprovider.feedback.view',
          matches:
            '[id="com.xunlei.downloadprovider:id/feedback_not_interested_layout"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12707717', // activityId: 'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
            'https://gkd-kit.gitee.io/import/12707702', // activityId: 'com.xunlei.downloadprovider.feedback.view'
          ],
        },
        {
          key: 2,
          activityIds: 'com.xunlei.downloadprovider.feedback.view',
          matches: '[id="com.xunlei.downloadprovider:id/ad_ima_skip"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882988',
        },
      ],
    },
    {
      key: 2,
      name: '视频详情-直播推荐',
      desc: '自动点击【减少推荐】',
      rules: [
        {
          key: 0,
          activityIds:
            'com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity',
          matches:
            '[id="com.xunlei.downloadprovider:id/title_tv"] + [id="com.xunlei.downloadprovider:id/more"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12707701',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.xunlei.downloadprovider.download.center.newcenter',
          matches: '[id="com.xunlei.downloadprovider:id/close_ad"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12707710',
        },
      ],
    },
    {
      key: 3,
      name: '应用内广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matchLauncher: true,
          matches: '@[text="关闭"] +n * > [text*="广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12868648',
            'https://gkd-kit.gitee.io/import/12879372',
            'https://gkd-kit.songe.li/import/12882366',
          ],
        },

        // 字节广告
        {
          key: 10,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View + View +n View > View > TextView[text="广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12868667',
            'https://gkd-kit.songe.li/import/12881946',
          ],
        },

        // 腾讯广告
        {
          key: 20,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882132',
        },
        {
          key: 21,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882166',
        },
        {
          key: 22,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882237',
        },

        // 快手广告
        {
          key: 30,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matchLauncher: true,
          matches:
            '@ImageView[visibleToUser=true] < ViewGroup < ViewGroup +n ViewGroup > [text="广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12882199', // n = 1
            'https://gkd-kit.songe.li/import/12881911', // n = 2
            'https://gkd-kit.songe.li/import/12881976', // 限定 visibleToUser=true，防止在这个快照中误触
          ],
        },
        {
          key: 31,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[text="广告"] <2 ViewGroup -2 ViewGroup >n [text="跳过"] + ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12881976',
        },
        {
          key: 2,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            'TextView[text="广告"] <n ViewGroup -2 ViewGroup > @ViewGroup',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12879452',
        },
      ],
    },
    {
      key: 4,
      name: '下载页面-广告卡片',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches: '[id="com.xunlei.downloadprovider:id/ad_more"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12881865',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.xunlei.downloadprovider.download.center.newcenter',
          matches: '[id="com.xunlei.downloadprovider:id/close_ad"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/128818775',
        },
      ],
    },
    {
      key: 5,
      name: '搜索页面-顶部banner广告',
      activityIds:
        'com.xunlei.downloadprovider.search.ui.search.SearchOperateActivity',
      rules: '[id="com.xunlei.downloadprovider:id/search_banner_ad_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12882892',
    },
    {
      key: 10,
      name: '会员续费广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunlei.downloadprovider.homepage.member',
          matches: '[id="com.xunlei.downloadprovider:id/close_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12707698',
        },
        {
          key: 1,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[id="com.xunlei.downloadprovider:id/all_picture_image"] + [id="com.xunlei.downloadprovider:id/close_btn"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882928',
        },
        {
          key: 2,
          activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
          matches:
            '[text="立即开通"] + [id="com.xunlei.downloadprovider:id/close"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12882939',
        },
      ],
    },
    {
      key: 11,
      name: '传输界面-广告弹窗',
      desc: '自动点击 右上角x 关闭',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: '@View +4 TextView[text="反馈"] + View TextView[text="广告"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12865892',
    },
  ],
});
