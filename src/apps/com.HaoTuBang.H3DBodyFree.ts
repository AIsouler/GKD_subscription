import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.HaoTuBang.H3DBodyFree',
  name: '3Dbody解剖',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.HaoTuBang.H3DBodyFree.modules.login.activity.SpalashActivity',
      rules: '[id="com.HaoTuBang.H3DBodyFree:id/adsParent"] >n [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12783176',
    },
  ],
});
