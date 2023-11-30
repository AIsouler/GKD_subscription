import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12783430',
    },
    {
      key: 1,
      name: '卡片式广告',
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
  ],
});
