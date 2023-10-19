import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      enable: false,
      key: 9,
      name: '自动第三方安装应用',
      desc: '自动允许第三方应用调用安装，安装应用',
      activityIds: [],
      rules:
        'TextView[text*="尝试安装应用"] < LinearLayout +2n LinearLayout > Button[text="继续"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12874746',
    },
    {
      enable: false,
      key: 10,
      name: '自动安装应用',
      desc: '启用后安装高风险应用将自动完成，请自行评估风险决定是否启用',
      rules: [
        // 正常安装
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

        // 需勾选【已了解此应用未经安全检测】才能继续安装
        {
          key: 1,
          desc: '勾选【已了解此应用未经安全检测】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12888410', // 未勾选
            'https://gkd-kit.gitee.io/import/12889120', // 已勾选
          ],
        },

        // 需勾选【已了解此应用存在高风险】才能继续安装
        {
          key: 2,
          desc: '点击【了解风险】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="了解风险"] + [text="取消安装"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12889135',
        },
        {
          preKeys: 2,
          key: 3,
          desc: '勾选【已了解此应用存在高风险】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12889137', // 未勾选
            'https://gkd-kit.gitee.io/import/12889148', // 已勾选
          ],
        },

        // 普通应用安装，提示文本为【继续安装】
        {
          preKeys: [0, 1],
          key: 10,
          desc: '点击【继续安装】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="继续安装"] + [text="取消安装"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12889120',
        },

        // 高风险应用安装，提示文本为【仍然安装】
        {
          preKeys: 3,
          key: 11,
          desc: '点击【仍然安装】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="仍然安装"] + [text="取消安装"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12889148',
        },

        // 安装完成
        {
          preKeys: [10, 11],
          key: 12,
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
        // 正常更新
        {
          key: 0,
          desc: '点击【继续更新】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[text="取消更新"] < LinearLayout - @FrameLayout > LinearLayout > [text="继续更新"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12817988',
            'https://gkd-kit.songe.li/import/12910080',
          ],
        },
        {
          key: 1,
          desc: '点击【继续更新】',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="继续更新"] + [text="取消更新"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/13024731',
            'https://gkd-kit.songe.li/import/13038465',
          ],
        },

        // 需勾选【已了解此安装包未经安全检测】才能继续更新
        {
          key: 2,
          desc: '勾选【已了解此安装包未经安全检测】',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false][text="已了解此安装包未经安全检测"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/13024730', // 未勾选
            'https://gkd-kit.songe.li/import/13024731', // 已勾选
          ],
        },

        // 更新完成
        {
          preKeys: [0, 1],
          key: 3,
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
