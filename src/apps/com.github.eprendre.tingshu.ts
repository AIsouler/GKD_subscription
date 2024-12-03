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
            '@ImageView[childCount=0][visibleToUser=true] < FrameLayout - LinearLayout > [text="立即下载" || text="下载应用"]',
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
  ],
});
