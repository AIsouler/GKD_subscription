import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: '[text="广告"] - @FrameLayout > [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12739065',
    },
  ],
});
