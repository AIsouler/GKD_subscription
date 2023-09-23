import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'li.songe.gkd',
  name: 'GKD',
  groups: [
    {
      key: 0,
      name: 'GKD-空规则组',
    },
    {
      enable: false,
      key: 1,
      name: 'GKD-批量删除快照',
      desc: '删除完成记得回来关闭这条规则哦~',
      activityIds: 'li.songe.gkd.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'ComposeView > View > View > View > @View[childCount=3] > TextView + TextView + TextView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12706723',
            'https://gkd-kit.gitee.io/import/12706741', // 必须加上 TextView + TextView + TextView，否则在这个快照会误触
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: 'View[childCount=3] > [text="删除"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12706723',
        },
      ],
    },
  ],
});
