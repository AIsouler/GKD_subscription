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
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '[text="继续安装"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206444',
            'https://i.gkd.li/import/14046749',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.android.packageinstaller.NewInstallInstalling',
            'com.android.packageinstaller.InstallSuccess',
          ],
          matches: '[text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206476',
            'https://i.gkd.li/import/13766420',
            'https://i.gkd.li/import/13962438',
            'https://i.gkd.li/import/14138323',
          ],
        },
      ],
    },
  ],
});
