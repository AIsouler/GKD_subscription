import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
  name: 'TwiTake',
  groups: [
    {
      key: 3,
      name: '评价提示-评分弹窗',
      desc: '自动点击 LATER ',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13748858',
        },
      ],
    },
  ],
});
