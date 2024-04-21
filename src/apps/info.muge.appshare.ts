import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
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
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12683145',
            'https://i.gkd.li/i/12683173',
            'https://i.gkd.li/i/13702708',
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/14553551',
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
          name: '软件详情页/搜索页卡片广告',
          quickFind: true,
          activityIds: [
            'info.muge.appshare.view.app.detail.AppDetailActivity',
            'info.muge.appshare.view.search.app.SearchAppActivity',
          ],
          matches:
            'ImageView < @FrameLayout[index=2][desc=null] <3 FrameLayout[childCount=5] <<(6,7) [vid^="ad"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c19bb8e3-abae-46ee-bfe9-d7846cd868bc',
          snapshotUrls: [
            'https://i.gkd.li/i/14382413',
            'https://i.gkd.li/i/14368946',
          ],
        },
      ],
    },
    {
      key: 2,
      quickFind: true,
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
      quickFind: true,
      activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
      rules: [
        {
          key: 0,
          matches:
            '@View[clickable=true] < FrameLayout[desc*="dislike"] <3 * < * <3 FrameLayout[childCount=3] <<n [id="info.muge.appshare:id/adContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3bc12aa2-7673-4261-9e3d-7e1605b22847',
          snapshotUrls: 'https://i.gkd.li/i/13758909',
        },
        {
          key: 1,
          matches:
            '@View[index=1] <2 View[childCount=3] <2 * < * <2 * <<n FrameLayout <3 FrameLayout[childCount=3] <<n [id="info.muge.appshare:id/adContainer"]',
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
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout > View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44',
          snapshotUrls: 'https://i.gkd.li/i/14181146',
        },
      ],
    },
    {
      key: 5,
      name: '通知提示-公告弹窗',
      desc: '点击[收到]',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
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
          quickFind: true,
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
