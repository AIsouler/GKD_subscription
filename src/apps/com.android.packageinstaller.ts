import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '[text="继续安装"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206444',
            'https://i.gkd.li/i/14046749',
          ],
        },
        {
          key: 1,
          name: '点击[完成]',
          activityIds: [
            'com.android.packageinstaller.NewInstallInstalling',
            'com.android.packageinstaller.InstallSuccess',
            'com.android.packageinstaller.oplus.InstallAppProgress',
          ],
          matches: '[text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13206476',
            'https://i.gkd.li/i/13766420',
            'https://i.gkd.li/i/13962438',
            'https://i.gkd.li/i/14138323',
            'https://i.gkd.li/i/14471862',
          ],
        },
        {
          key: 2,
          name: '点击[安装]',
          quickFind: true,
          activityIds: 'com.android.packageinstaller.DeleteStagedFileOnResult',
          matches: '[vid="confirm_bottom_button_layout"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1decf3eb-ef21-4e67-9fd9-ce8727a9b9b5',
          snapshotUrls: 'https://i.gkd.li/i/14228348',
        },
        {
          key: 3,
          name: '勾选[已了解此应用未经检测，可能存在风险]',
          quickFind: true,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '[vid="checkbox"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/332c6590-da4b-463d-99e1-b43a81800fd3',
          snapshotUrls: 'https://i.gkd.li/i/14595443',
        },
      ],
    },
  ],
});
