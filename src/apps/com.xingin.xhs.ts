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
      snapshotUrls: 'https://i.gkd.li/import/12739065',
    },
    {
      key: 1,
      name: '关闭开启通知弹窗',
      quickFind: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: '@ImageView <2 FrameLayout >2 [text^="打开通知"]',
      snapshotUrls: 'https://i.gkd.li/import/13195753',
    },
  ],
});
