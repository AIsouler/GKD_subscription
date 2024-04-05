import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sh.gj',
  name: '上海公交',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.sh.gj.MainActivity',
            'com.sh.gj.activity.LineDetailActivity',
          ],
          matches:
            'ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid="bannerContainer"]',
          exampleUrls:
            'https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b',
          snapshotUrls: [
            'https://i.gkd.li/i/14883102',
            'https://i.gkd.li/i/14883152',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-退出软件时的确认弹窗',
      desc: '点击[确认退出]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.sh.gj.MainActivity',
          matches: '[text="确认退出"]',
          exampleUrls:
            'https://m.gkd.li/57941037/38c20d82-947e-4e46-aba8-80e1a773552b',
          snapshotUrls: 'https://i.gkd.li/i/14883160',
        },
      ],
    },
  ],
});
