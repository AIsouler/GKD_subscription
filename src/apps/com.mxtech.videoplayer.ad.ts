import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxtech.videoplayer.ad',
  name: 'MX 播放器',
  groups: [
    {
      key: 1,
      name: '全屏广告-谷歌广告',
      activityIds: 'com.mxtech.videoplayer.ad.ActivityMediaList',
      rules: [
        {
          matches:
            '[desc="Advertisement"] + View >(2) View + Button[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642204',
        },
      ],
    },
  ],
});
