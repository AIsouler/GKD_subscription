import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lingan.seeyou',
  name: '美柚',
  groups: [
    {
      key: 1,
      name: '局部广告-评论区上方卡片广告',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds:
            'com.lingan.seeyou.ui.activity.community.topicdetail.TopicDetailActivity',
          matches: '[id="com.lingan.seeyou:id/v_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14034770',
        },
      ],
    },
  ],
});
