import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      rules: [
        {
          matches: 'FrameLayout[id=null] > TextView[text="跳过"][id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700227',
            'https://gkd-kit.gitee.io/import/12700122',
            'https://gkd-kit.gitee.io/import/12700541',
            'https://gkd-kit.gitee.io/import/12910953',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '关闭青少年弹窗',
      activityIds: [
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
        'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      ],
      rules:
        'TextView[text*="青少年模式"] +n TextView[id="com.tencent.qqlive:id/arg"][text="我知道了"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700145',
    },
    {
      key: 2,
      name: '更新弹窗',
      activityIds: [
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
      ],
      rules:
        '@[text="暂不升级"] - LinearLayout > FrameLayout > [text="立即升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700486',
    },
    {
      key: 3,
      name: '首页-顶部广告卡片',
      activityIds: ['com.tencent.qqlive.ona.activity.SplashHomeActivity'],
      rules: [
        {
          desc: '点击右上角[广告]',
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700299',
            'https://gkd-kit.gitee.io/import/12700302',
          ],
        },
        {
          desc: '点击右上角[关闭广告]',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700518'],
        },
        {
          desc: '点击右上角[广告]',
          matches:
            'RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc="the ad tag"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12737313',
        },
      ],
    },
    {
      key: 4,
      name: '片头广告',
      desc: '自动点击 跳过广告',
      activityIds: ['com.tencent.qqlive.ona.activity.VideoDetailActivity'],
      rules: [
        {
          matches: '[text="跳过广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700407'],
        },
        {
          matches:
            '@ImageView < FrameLayout < FrameLayout +(2) LinearLayout >(3) [text$="跳过广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700433'],
        },
      ],
    },
    {
      key: 5,
      name: '个人中心广告',
      activityIds: ['com.tencent.qqlive.ona.activity.SplashHomeActivity'],
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700175',
        },
        {
          key: 1,
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777344',
        },
      ],
    },
    {
      key: 19, // 配合应用内其他广告卡片使用，反馈界面的规则都是一样的
      name: '广告反馈卡片',
      desc: '自动点击 不感兴趣 -> 确定',
      activityIds: [
        'com.tencent.qqlive.ona.activity.SplashHomeActivity',
        'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
      ],
      rules: [
        {
          key: 1,
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700303',
            'https://gkd-kit.gitee.io/import/12829866',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700210',
        },
      ],
    },
    {
      enable: false,
      key: 20,
      name: '请求开启推送通知弹窗',
      desc: '自动点击“以后再说”',
      activityIds:
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
      rules: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700139',
    },
  ],
});
