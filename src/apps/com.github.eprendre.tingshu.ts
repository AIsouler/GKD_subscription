import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      activityIds: [
        'com.github.eprendre.tingshu.ui.search.AggregateSearchActivity',
        'com.github.eprendre.tingshu.ui.play.PlayerActivity',
      ],
      rules: [
        {
          key: 0,
          name: '搜索结果底部/播放页面卡片广告',
          activityIds: 'com.github.eprendre.tingshu.ui.play.PlayerActivity',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: [
            'https://i.gkd.li/i/12783466',
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
