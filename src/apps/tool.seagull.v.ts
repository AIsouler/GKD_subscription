import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tool.seagull.v',
  name: '海鸥加速器',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '卡片式广告-1',
          activityIds: 'io.github.trojan_gfw.igniter.MainActivity',
          matches:
            'View[childCount=2] > @Button[clickable=true] - View > View > View > Image',
          snapshotUrls: 'https://i.gkd.li/import/13413556',
        },
      ],
    },
  ],
});
