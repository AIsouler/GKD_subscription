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
          matches: '[text="安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14046939',
        },
        {
          key: 2,
          matches: '[text="更新"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14047571',
            'https://i.gkd.li/i/14047854', // 重叠情况的快照
          ],
        },
        {
          key: 3,
          matches: '[text="完成"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14047514',
            'https://i.gkd.li/i/14047969',
            'https://i.gkd.li/i/16435556',
          ],
        },
        {
          key: 4,
          position: {
            left: 'width * 1.4975',
            top: 'height * 0.5',
          },
          excludeMatches: [
            '[text="更新"][clickable=true]',
            '[text="安装"][clickable=true]',
          ],
          matches: [
            '[text="要更新此应用吗？" || text="要安装此应用吗？"]',
            '[text="取消"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16406316',
            'https://i.gkd.li/i/16435642',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-安全警告弹窗',
      desc: '点击[设置]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: ['[text^="出于安全考虑"]', '[text="设置"]'],
          exampleUrls: 'https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971',
          snapshotUrls: 'https://i.gkd.li/i/16406317',
        },
      ],
    },
  ],
});
