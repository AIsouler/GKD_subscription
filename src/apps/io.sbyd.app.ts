import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13261949',
        },
      ],
    },
    {
      key: 0,
      name: '弹窗广告',
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          matches:
            'TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13274336',
        },
      ],
    },
  ],
});
