import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      enable: false,
      key: 10,
      name: '自动安装应用',
      rules: [
        {
          key: 0,
          desc: '点击【继续安装】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[text="取消安装"] < LinearLayout - @FrameLayout > LinearLayout > [text="继续安装"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12818034',
            'https://gkd-kit.songe.li/import/12818054',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          desc: '点击【完成】',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12818044',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '自动更新应用',
      rules: [
        {
          key: 0,
          desc: '点击【继续更新】',
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches:
            '[text="取消更新"] < LinearLayout - @FrameLayout > LinearLayout > [text="继续更新"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12817988',
        },
        {
          preKeys: 0,
          key: 1,
          desc: '点击【完成】',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12817999',
        },
      ],
    },
  ],
});
