import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[text*="跳过"][visibleToUser=true][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14553551',
        },
        {
          // 该开屏广告需要点击坐标在跳过按钮下半部分内才能跳过
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.5',
            top: 'width * 0.6984',
          },
          matches: '@ViewGroup > [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15269380',
            'https://i.gkd.li/i/15285908',
            'https://i.gkd.li/i/15520277',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '软件详情页卡片广告',
          fastQuery: true,
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches:
            'FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid="adContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/14382413',
        },
        {
          key: 1,
          name: '搜索页卡片广告',
          fastQuery: true,
          activityIds: 'info.muge.appshare.view.search.app.SearchAppActivity',
          matches:
            'FrameLayout[childCount=5] > @FrameLayout[visibleToUser=true] > ImageView <<n [vid="adView"]',
          snapshotUrls: 'https://i.gkd.li/i/14368946',
        },
      ],
    },
    {
      key: 2,
      fastQuery: true,
      name: '功能类-自动签到',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[id="info.muge.appshare:id/tvSign"][text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/13931265',
        },
        {
          preKeys: 0,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[id="info.muge.appshare:id/tvClose"][text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/13931279',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-软件详情页广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout[childCount=3] >3 [desc^="dislike"] > @View[clickable=true] <<n [id="info.muge.appshare:id/adContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847',
          snapshotUrls: 'https://i.gkd.li/i/13758909',
        },
        {
          key: 1,
          matches:
            'FrameLayout[childCount=3] >2 WebView >6 @View[visibleToUser=true] > Image <<n [vid="adContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe',
          snapshotUrls: 'https://i.gkd.li/i/14160959',
        },
        // 中间的key预留给第一段广告

        {
          // preKeys有概率导致二段不触发
          key: 10,
          matches: '@LinearLayout > [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d',
          snapshotUrls: 'https://i.gkd.li/i/14161009',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '广告展示率低于20%时出现的广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: 'View[vid="v_jump"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44',
          snapshotUrls: 'https://i.gkd.li/i/14181146',
        },
        {
          key: 1,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/13a69193-a276-4115-97dd-bd7a4b49fbee',
          snapshotUrls: [
            'https://i.gkd.li/i/15209619',
            'https://i.gkd.li/i/15211765',
          ],
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="反馈"] <n * > @View[childCount=1][index=0 || index=1] > Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/155fdf95-1f5a-4bf3-a8e7-161e6bfe7bbf',
          snapshotUrls: [
            'https://i.gkd.li/i/15209618',
            'https://i.gkd.li/i/15282994',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '通知提示-公告弹窗',
      desc: '点击[收到]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[vid="tvSure"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8b782da0-1501-4839-a19b-92209b4d2723',
          snapshotUrls: 'https://i.gkd.li/i/14345476',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击[使用浏览器打开]',
      desc: '下载文件页面',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'info.muge.appshare.view.browser.DownloadBrowserActivity',
          matches: '[text="浏览器打开"]',
          exampleUrls:
            'https://m.gkd.li/57941037/aae3c59c-8eac-452c-984e-84ee9b97e986',
          snapshotUrls: 'https://i.gkd.li/i/14792822',
        },
      ],
    },
  ],
});
