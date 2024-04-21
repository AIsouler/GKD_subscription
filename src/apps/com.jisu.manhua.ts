import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jisu.manhua',
  name: '漫画人极速版',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      activityIds: 'com.ilike.cartoon.activities.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.jisu.manhua:id/iv_promotion"] + [id="com.jisu.manhua:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13688186',
        },
      ],
    },
  ],
});
