import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
  name: 'TwiTake',
  groups: [
    {
      key: 3,
      name: '评价提示-评分弹窗',
      desc: '自动点击 LATER ',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13748858',
        },
      ],
    },
  ],
});
