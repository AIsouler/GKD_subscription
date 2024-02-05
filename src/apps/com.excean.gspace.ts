import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: [
        'com.excelliance.kxqp.splash.SplashActivity',
        'com.excelliance.kxqp.gs.main.MainActivity',
      ],
      rules: [
        {
          name: '类型1',
          matches:
            'FrameLayout[childCount=2] > LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13302890',
        },
        {
          name: '类型2',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: 'https://i.gkd.li/import/13447122',
        },
      ],
    },
  ],
});
