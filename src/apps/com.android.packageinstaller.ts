import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.packageinstaller',
  name: 'vivo 软件包安装程序',
  groups: [
    {
      key: 1,
      name: '自动安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '@LinearLayout > [text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13206444',
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'com.android.packageinstaller.NewInstallInstalling',
          matches: '@[clickable=true][childCount=1] > [text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13206476',
        },
        {
          key: 2,
          preKeys: 0,
          activityIds: 'com.android.packageinstaller.NewInstallInstalling',
          matches:
            '[id="com.android.packageinstaller:id/done_button"][text="完成"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13766420',
        },
      ],
    },
  ],
});
