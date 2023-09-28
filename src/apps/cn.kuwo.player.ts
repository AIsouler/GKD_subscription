import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 0,
      name: '开屏、切屏广告',
      rules: [
        {
          key: 0,
          name: '开屏广告',
          activityIds: 'cn.kuwo.player.activities.EntryActivity',
          matches: '[id="cn.kuwo.player:id/skip_button"][text="跳过"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12727887',
        },
        {
          key: 1,
          name: '切屏广告',
          activityIds: 'cn.kuwo.player.activities.EntryActivity',
          matches: '[id="cn.kuwo.player:id/btnSkip"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12740634',
        },
      ],
    },
  ],
});
