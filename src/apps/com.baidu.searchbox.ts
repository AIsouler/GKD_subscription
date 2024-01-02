import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@RelativeLayout > LinearLayout > [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13258006',
    },
    {
      key: 1,
      name: '红包弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.searchbox.MainActivity',
          matches: '[text^="看视频"] -2 ImageView[index=4]',
          snapshotUrls: 'https://i.gkd.li/import/13806848',
        },
      ],
    },
  ],
});
