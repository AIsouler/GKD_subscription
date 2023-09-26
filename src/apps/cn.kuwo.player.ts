import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.kuwo.player.activities.EntryActivity',
      rules: '[id="cn.kuwo.player:id/skip_button"][text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12727887',
    },
  ],
});
