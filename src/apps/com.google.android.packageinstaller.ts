import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      // 由于该软件包安装程序存在更新、安装重叠的情况，且安装/更新后和重叠时activityid都不同，
      // 尚不明确安装、更新、重叠三种情况混合时的activityid，故去掉activityIds字段
      key: 1,
      name: '功能类-自动安装/更新软件',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: 'LinearLayout[childCount=2] > [text="安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14046939',
        },
        {
          key: 2,
          matches: 'LinearLayout[childCount=2] > [text="更新"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14047571',
            'https://i.gkd.li/i/14047854', // 重叠情况的快照
          ],
        },
        {
          key: 3,
          matches: 'LinearLayout[childCount=2] > [text="完成"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14047514',
            'https://i.gkd.li/i/14047969',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '其他-安全警告弹窗',
      desc: '点击取消',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: ['[text^="出于安全考虑"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971',
          snapshotUrls: 'https://i.gkd.li/i/16406317',
        },
      ],
    },
  ],
});
