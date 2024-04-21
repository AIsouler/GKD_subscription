import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jz.xydj',
  name: '星芽免费短剧',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          key: 0,
          name: '底部卡片广告',
          quickFind: true,
          activityIds: 'com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2',
          matches: '[vid="ad_close"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c6e1dfa9-388e-417f-9ab2-d3ea63d3eb8a',
          snapshotUrls: 'https://i.gkd.li/i/14391204',
        },
      ],
    },
  ],
});
