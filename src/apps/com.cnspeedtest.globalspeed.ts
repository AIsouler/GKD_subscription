import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnspeedtest.globalspeed',
  name: '全球网测',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[id="com.cnspeedtest.globalspeed:id/vision_btn_ok"][text="更新"] +2 [id="com.cnspeedtest.globalspeed:id/vision_btn_cancel"]',
      ],
      snapshotUrls: 'https://i.gkd.li/i/12642345',
    },
  ],
});
