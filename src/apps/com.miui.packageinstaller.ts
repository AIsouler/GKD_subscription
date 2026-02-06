import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 7,
      name: '功能类-放弃开启安全守护',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
      rules: [
        {
          key: 0,
          matches: '[text="30天内不再提示"][checked=false]',
          exampleUrls: 'https://e.gkd.li/fe6682cd-a27a-4183-8717-15fd373bafcf',
          snapshotUrls: 'https://i.gkd.li/i/16487140',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="放弃"]',
          exampleUrls: 'https://e.gkd.li/859dac99-62ca-4876-bdfb-c84795254111',
          snapshotUrls: 'https://i.gkd.li/i/16487142',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-自动安装/更新应用',
      desc: '该规则仅适配关闭[应用安全验证]和[安全守护]的情况，可在安装页面右上角设置里关闭，关闭后的风险自行承担',
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '点击[安装]/[更新]',
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          ],
          excludeMatches:
            '[text="已了解此应用存在风险"][checked=false][visibleToUser=true]',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^="继续" || text^="仍然"][text.length=4][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bd3e2764-4978-44ed-93d3-f176c23c3ec4',
          snapshotUrls: [
            'https://i.gkd.li/i/16487278',
            'https://i.gkd.li/i/16487282',
            'https://i.gkd.li/i/17691996',
            'https://i.gkd.li/i/20053957',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25095995',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击[完成]',
          activityIds:
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          excludeMatches: '[text*="安装失败"]', // 安装失败时排除匹配，此节点比 [text="完成"] 延迟出现，未出现时 visibleToUser=false，因此去掉[visibleToUser=true]限制
          matches: '[text="完成"]',
          exampleUrls: 'https://e.gkd.li/0011622b-580a-4810-81a4-b4a1181d121d',
          snapshotUrls: 'https://i.gkd.li/i/16487274',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20282424',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-自动允许应用安装软件',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: [
        'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
        'com.miui.packageInstaller.NewInstallerPrepareActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[记住我的选择]',
          matches: [
            '[text^="是否允许"][text*="安装应用"][visibleToUser=true]',
            'CheckBox[text="记住我的选择"][checked=false][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/af834ca4-744a-485f-bec6-9802979fe949',
          snapshotUrls: [
            'https://i.gkd.li/i/16487366',
            'https://i.gkd.li/i/16487389',
            'https://i.gkd.li/i/18937578',
            'https://i.gkd.li/i/20287209',
          ],
        },
        {
          preKeys: [0],
          name: '点击[允许]',
          matches: '[text="允许"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4f4ce827-6b74-4b55-8fed-5e009acd4bbd',
          snapshotUrls: [
            'https://i.gkd.li/i/16487365',
            'https://i.gkd.li/i/18937576',
            'https://i.gkd.li/i/20287160',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '功能类-安装来源不可信',
      desc: '点击[授权本次安装]',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          position: {
            left: 'width * 0.3511',
            top: 'height * 0.5',
          },
          activityIds:
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
          matches: '[text$="授权本次安装"]',
          exampleUrls: 'https://e.gkd.li/e470baf2-56dc-4e3c-8da0-9747eeec602f',
          snapshotUrls: 'https://i.gkd.li/i/17898736',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-关闭备案信息弹窗',
      desc: '点击[继续安装]',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.miui.packageInstaller.ui.InstallPrepareAlertActivity',
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
          matches: ['[text$="备案信息"]', '[text="继续安装"]'],
          exampleUrls: 'https://e.gkd.li/d5bc4b1a-e363-4aab-9240-e6d914730935',
          snapshotUrls: [
            'https://i.gkd.li/i/17908298',
            'https://i.gkd.li/i/20642970',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '功能类-无视风险继续安装',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] >2 [text="无视风险继续安装"]',
          exampleUrls: 'https://e.gkd.li/46f06948-5ec1-4054-8aa3-a8f39e5d1f26',
          snapshotUrls: 'https://i.gkd.li/i/18002566',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="继续"]',
          exampleUrls: 'https://e.gkd.li/375fc2ec-841a-4af6-be99-9391ebeb7dc5',
          snapshotUrls: 'https://i.gkd.li/i/18002704',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[clickable=true][desc="更多"] > [vid="action_menu_item_child_icon"]',
          exampleUrls: 'https://e.gkd.li/de8fb9c9-ea4e-4c03-93bd-047bf31cd4c8',
          snapshotUrls: 'https://i.gkd.li/i/18002708',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '@[clickable=true] >(1,2) [text="单次安装授权"]',
          exampleUrls: 'https://e.gkd.li/0e8afdd7-04d3-46fd-9095-b61123d041b2',
          snapshotUrls: [
            'https://i.gkd.li/i/18002712',
            'https://i.gkd.li/i/20746863',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-自动勾选[已了解此应用存在风险]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.packageInstaller.NewInstallerPrepareActivity',
          matches:
            '[text="已了解此应用存在风险"][checked=false][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25095995',
        },
      ],
    },
  ],
});
