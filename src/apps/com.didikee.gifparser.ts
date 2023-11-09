import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didikee.gifparser',
  name: 'GIF助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gif.SplashAdActivity',
      rules: [
        {
          matches:
            '[id="com.didikee.gifparser:id/skip_view"][text^="跳过"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/import/12674390'],
        },
      ],
    },
  ],
});
