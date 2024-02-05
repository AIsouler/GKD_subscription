import { defineAppConfig } from '../types';

export default defineAppConfig({
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
          snapshotUrls: 'https://i.gkd.li/import/13688186',
        },
      ],
    },
  ],
});
