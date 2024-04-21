import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaofeiji.app.disk',
  name: '小飞机网盘',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '分段广告',
      desc: '点击X-点击不感兴趣',
      rules: [
        {
          key: 0,
          activityIds: 'com.xiaofeiji.app.disk.MainActivity',
          matches: '@Image[visibleToUser=true] < View + View >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13857392',
        },
        {
          preKeys: 0,
          key: 1,
          activityIds: 'com.xiaofeiji.app.disk.MainActivity',
          matches: '[id="android:id/content"] >5 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13857537',
        },
      ],
    },
  ],
});
