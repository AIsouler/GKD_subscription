import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lxt.cfmoto',
  name: 'CFMOTO',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: 'com.cfmoto.oilmoto.ui.MainCfActivity',
          matches:
            'RelativeLayout[childCount=2] > [id="com.lxt.cfmoto:id/image"] + [id="com.lxt.cfmoto:id/closeClick"]',
          snapshotUrls: 'https://i.gkd.li/import/13401967',
        },
      ],
    },
  ],
});
