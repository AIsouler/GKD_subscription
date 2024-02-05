import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      activityIds: [
        'com.github.eprendre.tingshu.ui.search.AggregateSearchActivity',
        'com.github.eprendre.tingshu.ui.play.PlayerActivity',
      ],
      rules: [
        {
          key: 0,
          name: '搜索结果底部/播放页面广告卡片',
          activityIds: 'com.github.eprendre.tingshu.ui.play.PlayerActivity',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: [
            'https://i.gkd.li/import/12783466',
            'https://i.gkd.li/import/13334850',
            'https://i.gkd.li/import/13446735',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.github.eprendre.tingshu.ui.SplashActivity',
          matches: [
            'ViewGroup[childCount=2] > [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13625303',
        },
      ],
    },
  ],
});
