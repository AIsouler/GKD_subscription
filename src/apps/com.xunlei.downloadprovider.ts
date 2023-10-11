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
      name: '视频详情-广告卡片',
      desc: '自动点击【不感兴趣】',
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
          matches: '@[text="关闭"] +n LinearLayout > [text*="广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12868648',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12868667',
        },
      ],
    },
    {
      enable: true,
      key: 10,
      name: '会员续费弹窗',
      activityIds: 'com.xunlei.downloadprovider.homepage.member',
      rules: '[id="com.xunlei.downloadprovider:id/close_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12707698',
    },
    {
      enable: true,
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
