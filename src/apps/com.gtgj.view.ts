import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gtgj.view',
  name: '高铁管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gtgj.view.LaunchActivity',
      rules:
        '[id="com.gtgj.view:id/logo_img_container"] >2 FrameLayout[clickable=true] > TextView[text=`跳过`]',
      snapshotUrls: ['https://i.gkd.li/import/12684583'],
    },
  ],
});
