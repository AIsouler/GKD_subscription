import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.games',
  name: '虎扑',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP广告',
      rules:
        '[id="com.byted.pangle:id/tt_splash_skip_btn"||id="com.hupu.games:id/tv_time"&&text*="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12509060',
        'https://i.gkd.li/import/12510962',
        'https://i.gkd.li/import/12567546',
        'https://i.gkd.li/import/12567546',
      ],
    },
    {
      key: 1,
      activityIds: [
        'com.hupu.games.main.MainActivity',
        'com.hupu.android.bbs.detail.PostDetailActivity',
        'com.hupu.topic.TopicActivity',
      ],
      quickFind: true,
      name: '推荐流广告',
      desc: '点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.hupu.games:id/shield_view"] >2 [id="com.hupu.games:id/tv_tag"][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12511005',
            'https://i.gkd.li/import/13258026',
            'https://i.gkd.li/import/13259692',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches:
            '@[clickable=true] > [id="com.hupu.games:id/tv_title"][text="屏蔽该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12511010',
            'https://i.gkd.li/import/12534848',
            'https://i.gkd.li/import/13259699',
          ],
        },
      ],
    },
  ],
});
