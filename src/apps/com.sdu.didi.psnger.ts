import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sdu.didi.psnger',
  name: '滴滴',
  groups: [
    {
      key: 0,
      name: '开屏广告',

      quickFind: true,
      activityIds: [
        'com.didi.sdk.app.launch.splash.SplashActivity',
        'com.didi.sdk.app.MainActivity',
      ],
      rules: [
        {
          matches: '[id=`com.sdu.didi.psnger:id/skip_ad_ll`]',
          snapshotUrls: 'https://i.gkd.li/import/12888394',
        },
      ],
    },
    {
      key: 1,
      name: '打车页面广告',
      desc: '点击广告卡片左上角x',
      rules: [
        {
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'ImageView[id=`com.sdu.didi.psnger:id/second_entrance_img`] + @ImageView[id=`com.sdu.didi.psnger:id/left_close_img`]',
          snapshotUrls: 'https://i.gkd.li/import/13760846',
        },
      ],
    },
  ],
});
