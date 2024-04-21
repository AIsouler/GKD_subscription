import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lxt.cfmoto',
  name: 'CFMOTO',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: 'com.cfmoto.oilmoto.ui.MainCfActivity',
          matches:
            'RelativeLayout[childCount=2] > [id="com.lxt.cfmoto:id/image"] + [id="com.lxt.cfmoto:id/closeClick"]',
          snapshotUrls: 'https://i.gkd.li/i/13401967',
        },
      ],
    },
  ],
});
