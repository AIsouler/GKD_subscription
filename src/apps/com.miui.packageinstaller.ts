import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 8,
      name: '功能类-安装来源不可信',
      desc: '点击[授权本次安装]',
      quickFind: true,
      activityIds: [
        'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
        'com.miui.packageInstaller.NewPackageInstallerActivity',
      ],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.8743',
            top: 'width * 0.1202',
          },
          matches: 'LinearLayoutCompat > [text*="授权本次安装"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e30144c7-c895-4950-a91d-9ce56a8570c8',
          snapshotUrls: 'https://i.gkd.li/i/14456398',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.6663',
            top: 'width * 0.1012',
          },
          matches: 'ViewGroup > [text*="授权本次安装"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4bcc94e7-17cb-4887-9e1d-067cf823b109',
          snapshotUrls: 'https://i.gkd.li/i/14925748',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动第三方安装应用',
      desc: '自动允许第三方应用调用安装，安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: [],
          matches:
            'TextView[text*="尝试安装应用"] < LinearLayout +2n LinearLayout > Button[text="继续"]',
          snapshotUrls: 'https://i.gkd.li/i/12874746',
        },
        {
          key: 1,
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: '@[text="允许"] + [text="禁止"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13054478',
            'https://i.gkd.li/i/13399425',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动安装应用',
      desc: '启用后安装高风险应用将自动完成，请自行评估风险决定是否启用',
      quickFind: true,
      rules: [
        // 正常安装
        {
          key: 0,
          name: '点击"继续安装"',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: ['[text="取消安装"]', '[text="继续安装"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12818034',
            'https://i.gkd.li/i/12818054',
            'https://i.gkd.li/i/12889120',
          ],
        },
        {
          key: 1,
          name: '点击"继续"',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '[text="取消"] - @*[clickable=true] >2 [text="继续"]',
          snapshotUrls: 'https://i.gkd.li/i/14392314',
        },

        // 需勾选"已了解此应用未经安全检测"才能继续安装
        {
          key: 2,
          name: '勾选"已了解此应用未经安全检测"',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[id="com.miui.packageinstaller:id/install_checked"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/12888410', // 未勾选
            'https://i.gkd.li/i/12889120', // 已勾选
          ],
        },

        // 需勾选"已了解此应用存在高风险"才能继续安装
        {
          key: 3,
          name: '点击"了解风险"',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="了解风险"] + [text="取消安装"]',
          snapshotUrls: 'https://i.gkd.li/i/12889135',
        },
        {
          key: 4,
          name: '勾选"已了解此应用存在高风险"',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '[text^="已了解此"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/12889137', // 未勾选
            'https://i.gkd.li/i/12889148', // 已勾选
            'https://i.gkd.li/i/16171390',
          ],
        },
        {
          key: 5,
          name: '点击"仍然安装"',
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          ],
          matches: '[text="仍然安装"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12889148',
            'https://i.gkd.li/i/16187625',
          ],
        },

        // 安装完成
        {
          key: 6,
          name: '点击"完成"',
          forcedTime: 30000, // 安装/更新时间过长会导致后续规则不触发
          activityIds: [
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
            'com.miui.packageInstaller.InstallProgressActivity',
            'com.miui.packageInstaller.ui.securemode.PureInstallProgressActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12818044',
            'https://i.gkd.li/i/13229404',
            'https://i.gkd.li/i/13501872',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动更新应用',
      quickFind: true,
      rules: [
        // 正常更新
        {
          key: 0,
          name: '点击"继续更新"-1',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: ['[text="取消更新"]', '[text="继续更新"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12817988',
            'https://i.gkd.li/i/12910080',
            'https://i.gkd.li/i/14392274',
          ],
        },
        {
          key: 1,
          name: '点击"继续更新"-2',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[text="继续更新"] + [text="取消更新"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13024731',
            'https://i.gkd.li/i/13038465',
          ],
        },

        // 需勾选"已了解此安装包未经安全检测"才能继续更新
        {
          key: 2,
          name: '勾选"已了解此安装包未经安全检测"',
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: '[text="已了解此安装包未经安全检测"][checked=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/13024730', // 未勾选
            'https://i.gkd.li/i/13024731', // 已勾选
          ],
        },

        // 更新完成
        {
          key: 3,
          name: '点击"完成"',
          forcedTime: 30000, // 安装/更新时间过长会导致后续规则不触发
          activityIds: [
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
            'com.miui.packageInstaller.InstallProgressActivity',
          ],
          matches:
            '[id="com.miui.packageinstaller:id/done_layout"] > [text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12817999',
            'https://i.gkd.li/i/13255733',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-澎湃-自动安装/更新',
      desc: '不完整，缺失自动点击完成部分。启用后安装高风险应用将自动完成，请自行评估风险决定是否启用',
      quickFind: true,
      rules: [
        // 正常安装
        {
          key: 0,
          name: '点击【继续更新】/【继续】',
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches: '@FrameLayout > LinearLayout > [text*="继续"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14083552', //继续更新,
            'https://i.gkd.li/i/14083554', //继续
          ],
        },

        // 需授权安装
        {
          key: 1,
          name: '点击【无视风险安装】',
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches: '[text="无视风险安装"]',
          snapshotUrls: 'https://i.gkd.li/i/14653062',
        },
        {
          key: 2,
          preKeys: 1,
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          name: '点击【继续】',
          matches: '[text="继续"]',
          snapshotUrls: 'https://i.gkd.li/i/14653087',
        },
        {
          key: 3,
          preKeys: 2,
          name: '点击右上角三点展开菜单',
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches:
            '@LinearLayout[index=0] > [vid="action_menu_item_child_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/14654045',
        },
        {
          key: 4,
          preKeys: 3,
          name: '授权本次安装',
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches: '@[clickable=true] > [text="单次授权安装"]',
          snapshotUrls: 'https://i.gkd.li/i/14653096',
        },
        //完成快照缺失，无法编写
      ],
    },
  ],
});
