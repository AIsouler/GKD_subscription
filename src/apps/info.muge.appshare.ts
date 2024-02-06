import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 1,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683168',
            'https://i.gkd.li/import/12683211',
            'https://i.gkd.li/import/12748893',
          ],
        },
        {
          key: 0,
          matches: '[id$="tt_splash_skip_btn"] <<n [vid="rlAdView"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683145',
            'https://i.gkd.li/import/12683173',
            'https://i.gkd.li/import/13702708',
          ],
        },
        {
          key: 2,
          matches:
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="rlAdView"]',
          snapshotUrls: 'https://i.gkd.li/import/13842826',
        },
        {
          key: 3,
          name: '穿山甲SDK',
          matches: '@View[clickable=true] <<n [vid="tp_splash_container_id"]',
          snapshotUrls: 'https://i.gkd.li/import/13939089',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-软件详情页卡片广告',
      desc: '点击关闭',
      activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            '@FrameLayout[index=2] <3 FrameLayout[childCount=5] <<n [id="info.muge.appshare:id/adContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c19bb8e3-abae-46ee-bfe9-d7846cd868bc',
          snapshotUrls: [
            'https://i.gkd.li/import/14160820',
            'https://i.gkd.li/import/13712716',
            'https://i.gkd.li/import/13761259',
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
          snapshotUrls: 'https://i.gkd.li/import/13931265',
        },
        {
          preKeys: 0,
          activityIds: 'info.muge.appshare.view.main.MainActivity',
          matches: '[id="info.muge.appshare:id/tvClose"][text="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13931279',
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
          snapshotUrls: 'https://i.gkd.li/import/13758909',
        },
        {
          key: 1,
          matches:
            '@View[index=1] <2 View[childCount=3] <2 * < * <2 * <<n FrameLayout <3 FrameLayout[childCount=3] <<n [id="info.muge.appshare:id/adContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fefece63-2ec2-413c-a292-4583d58478fe',
          snapshotUrls: 'https://i.gkd.li/import/14160959',
        },
        // 中间的key预留给第一段广告

        {
          // preKeys有概率导致二段不触发
          key: 10,
          matches: '@LinearLayout > [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/27a5eebc-a55a-466e-85f3-7642c23b4b3d',
          snapshotUrls: 'https://i.gkd.li/import/14161009',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-广告弹窗',
      desc: '广告展示率低于20%时出现的广告',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout > View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/6b1d7b37-edd7-499f-a8b0-ecba24ef2c44',
          snapshotUrls: 'https://i.gkd.li/import/14181146',
        },
      ],
    },
  ],
});
