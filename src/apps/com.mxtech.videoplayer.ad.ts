import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mxtech.videoplayer.ad',
  name: 'MX 播放器',
  groups: [
    {
      key: 1,
      name: '谷歌广告',
      activityIds: 'com.mxtech.videoplayer.ad.ActivityMediaList',
      rules: [
        {
          matches:
            '[desc="Advertisement"] + View >(2) View + Button[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12642204'],
        },
      ],
    },
  ],
});
