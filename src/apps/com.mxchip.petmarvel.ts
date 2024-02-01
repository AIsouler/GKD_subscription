import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mxchip.petmarvel',
  name: '滴宠生活',
  groups: [
    {
      key: 1,
      name: '局部广告-左上角卡片弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.mxchip.petmarvel.device.panel.DevicePanelActivity',
          matches:
            'View[childCount=19] > View[index=1] > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13989316',
        },
      ],
    },
  ],
});
