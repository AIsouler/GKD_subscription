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
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12783430',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '搜索结果底部广告卡片',
          activityIds:
            'com.github.eprendre.tingshu.ui.search.AggregateSearchActivity',
          matches:
            'ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/12783466',
        },
        {
          key: 1,
          name: '播放页面广告卡片',
          activityIds: 'com.github.eprendre.tingshu.ui.play.PlayerActivity',
          matches:
            'ImageView + LinearLayout + LinearLayout + FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13334850',
        },
      ],
    },
  ],
});
