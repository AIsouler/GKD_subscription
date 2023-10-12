import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dmzjsq.manhua',
  name: '动漫之家社区',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      matchLauncher: true,
      quickFind: true,
      rules:
        '@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <2 FrameLayout[childCount=3] < FrameLayout[childCount=1] < [id="android:id/content"][childCount=1]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12885087',
    },
  ],
});
