import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      fastQuery: true,
      forcedTime: 10000,
      activityIds: [
        '.PackageInstallerActivity',
        '.FlymePackageInstallerActivity',
        '.PackageInterceptActivity',
        '.NewInstallInstalling',
        '.InstallSuccess',
        '.oplus.InstallAppProgress',
        '.DeleteStagedFileOnResult',
      ],
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          matches:
            '[text="继续安装"][focusable=true || parent.focusable=true || parent.parent.focusable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206444',
            'https://i.gkd.li/i/14046749',
            'https://i.gkd.li/i/16550275',
            'https://i.gkd.li/i/23621117',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23621105',
        },
        {
          key: 1,
          name: '点击[完成]',
          matches: '[text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206476',
            'https://i.gkd.li/i/13766420',
            'https://i.gkd.li/i/13962438',
            'https://i.gkd.li/i/14138323',
            'https://i.gkd.li/i/14471862',
            'https://i.gkd.li/i/16550273',
          ],
        },
        {
          key: 2,
          name: '点击[安装]',
          matches: '[vid="confirm_bottom_button_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/14228348',
        },
        {
          key: 3,
          name: '勾选[已了解此应用未经检测，可能存在风险]',
          matches:
            '[vid="checkbox" || vid="deleted_file_state_cb"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/14595443',
            'https://i.gkd.li/i/22870985',
          ],
        },
        {
          key: 4,
          position: {
            left: 'width * 1.5394',
            top: 'height * 0.5',
          },
          excludeMatches: '[text="继续安装" || text="完成"]',
          matches:
            'LinearLayout[childCount=1] > Button[text="取消"][childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/14969116',
            'https://i.gkd.li/i/17158050',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-授权本次安装',
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.4609',
            top: 'height * 0.75',
          },
          activityIds: '.PackageInterceptActivity',
          matches:
            '[vid="tv_install_guide"][text*="授权本次安装"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6ad6e4c6-3cb7-41b2-a37b-bcaa3c06de34',
          snapshotUrls: 'https://i.gkd.li/i/24465121',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动继续安装高危风险应用',
      rules: [
        {
          fastQuery: true,
          activityIds: '.PackageInterceptActivity',
          matches: [
            '[text="该应用存在高危风险"][visibleToUser=true]',
            '@[clickable=true] >2 [text="仍要继续"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/2961e749-6aac-4f74-b7f7-268ecc0e14f4',
          snapshotUrls: 'https://i.gkd.li/i/24540505',
        },
      ],
    },
  ],
});
