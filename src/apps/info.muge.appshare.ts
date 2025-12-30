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
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
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
      name: '功能类-自动签到',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          excludeMatches: '[vid="tvRandomTitle"][text="推荐应用"]',
          matches: '[text="签到"][vid="tvSign"]',
          snapshotUrls: 'https://i.gkd.li/i/13931265',
          excludeSnapshotUrls: 'https://i.gkd.li/i/22319703', // 避免点击首页签到按钮
        },
        {
          preKeys: [0],
          fastQuery: true,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[text="确定"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931279',
            'https://i.gkd.li/i/20259829',
          ],
        },
        {
          key: 1,
          versionCode: { minimum: 392 },
          activityIds: '.MainActivity',
          matches: '[text="签到"]',
          exampleUrls: 'https://e.gkd.li/7cfe113c-7d85-4810-be71-c04a090954af',
          snapshotUrls: 'https://i.gkd.li/i/24376300',
        },
        {
          preKeys: [1],
          versionCode: { minimum: 392 },
          activityIds: '.MainActivity',
          matches: '[text="我知道了"]',
          exampleUrls: 'https://e.gkd.li/8152f9f2-e0e9-4b0d-9cb7-64c6704a671f',
          snapshotUrls: 'https://i.gkd.li/i/24376307',
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
          fastQuery: true,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/f89eea71-55f0-4c27-a4b0-79ac5296becd',
          snapshotUrls: 'https://i.gkd.li/i/15209619',
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
        {
          key: 3,
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          exampleUrls: 'https://e.gkd.li/b4d9d653-a4ad-4e4f-a8f5-30b1485547b5',
          snapshotUrls: 'https://i.gkd.li/i/15211765',
        },
      ],
    },
    {
      key: 5,
      name: '通知提示-公告弹窗',
      desc: '点击[收到]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
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
