import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-酷我会员日弹窗',
      rules: [
        {
          activityIds: 'cn.kuwo.player.activities.MainActivity',
          matches: '[id="cn.kuwo.player:id/iv_business_personal_dia_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13974483',
        },
      ],
    },
  ],
});
