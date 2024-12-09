import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '搜索结果底部/播放页面卡片广告',
          activityIds: '.ui.search.AggregateSearchActivity',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: 'https://i.gkd.li/i/12783466',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.play.PlayerActivity',
          matches:
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序"]',
          exampleUrls: 'https://e.gkd.li/d3d33d4f-4c15-45a0-9e86-0c1ca2ecc7c9',
          snapshotUrls: [
            'https://i.gkd.li/i/13334850',
            'https://i.gkd.li/i/13446735',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: 'com.github.eprendre.tingshu.ui.SplashActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13625303',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-播放页卡片广告',
      desc: '点击关闭-点击不感兴趣',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: '.ui.play.PlayerActivity',
          matches:
            '@[desc="close"][visibleToUser=true] + [desc="ad_logo"] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/357bf940-7a93-4769-8c6d-480985b72901',
          snapshotUrls: 'https://i.gkd.li/i/17892446',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.ui.play.PlayerActivity',
          matches:
            '@[text="反馈"] <2 View + View >3 [visibleToUser=true][text="广告"] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/664d87f3-9571-4f48-ae01-4cd2a2634bc4',
          snapshotUrls: 'https://i.gkd.li/i/18057482',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: '.ui.play.PlayerActivity',
          matches:
            '@Image[childCount=0][visibleToUser=true][width<60 && height<60] < View[childCount=1] +2 View > View[childCount=2] >2 [visibleToUser=true][text="广告"] <<n [vid="ad_container"]',
          exampleUrls: 'https://e.gkd.li/a2408a2d-7d84-4658-b660-ce8a4c849190',
          snapshotUrls: 'https://i.gkd.li/i/18058170',
        },
        {
          preKeys: [1, 2, 3],
          fastQuery: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
            '.ui.play.PlayerActivity',
          ],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/7ce6d9c4-c77a-4655-91c2-97e1987f0914',
          snapshotUrls: [
            'https://i.gkd.li/i/17892449',
            'https://i.gkd.li/i/18057440',
            'https://i.gkd.li/i/18058170',
          ],
        },
      ],
    },
  ],
});
