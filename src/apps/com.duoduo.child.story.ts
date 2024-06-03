import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duoduo.child.story',
  name: '儿歌多多',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭视频上方广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.duoduo.child.story.ui.activity.PlayActivity',
          matches: '[vid="iv_close_banner"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0a4febc1-9a34-41cb-bbca-63c6723fa228',
          snapshotUrls: 'https://i.gkd.li/i/15531352',
        },
      ],
    },
  ],
});
