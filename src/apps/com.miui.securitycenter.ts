import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '小米手机管家',
  groups: [
    {
      key: 10,
      name: '功能类-自动继续安装',
      desc: 'USB安装应用,点击继续安装',
      fastQuery: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/i/13269875',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-禁止获取定位',
      desc: '关闭"允许联网及定位"后，每次打开手机管家都会出现',
      fastQuery: true,
      activityIds: [
        'com.miui.securityscan.MainActivity', // app版本v8
        'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity', // app版本v5
      ],
      rules: [
        {
          matches: [
            '[id="com.miui.securitycenter:id/title"][text="获取位置信息"]',
            '[text="不同意"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13474517',
            'https://i.gkd.li/i/13476592', // activityIds: 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-使用返回退出时直接点击[退出]',
      desc: '退出时忽略[体检优化分数]/忽略[存储空间预警]',
      fastQuery: true,
      activityIds: 'com.miui.securityscan.MainActivity',
      rules: [
        {
          matches: '[text="退出"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13474504', // app版本v5
            'https://i.gkd.li/i/13476770', // app版本v8
            'https://i.gkd.li/i/15137908',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '功能类-电量已低于20%',
      desc: '点击[知道了]',
      rules: [
        {
          fastQuery: true,
          matches: '@[text="知道了"] + [text="省电模式"]',
          snapshotUrls: 'https://i.gkd.li/i/14468423',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-高敏感权限自动确定',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      fastQuery: true,
      activityIds: [
        'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]',
            '@[vid="check_box"][checked=false]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/e9672ccd-8dd1-4060-bdbe-52bb355d404f',
          snapshotUrls: [
            'https://i.gkd.li/i/14965657',
            'https://i.gkd.li/i/15242826',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1f2a118a-db2a-448d-a95d-f10d746b72e3',
          snapshotUrls: [
            'https://i.gkd.li/i/14965656',
            'https://i.gkd.li/i/15242825',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '功能类-应用信息页-自启动提示',
      desc: '点击[知道了]/[关闭]',
      fastQuery: true,
      activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: '[text^="开启自启动"]',
          snapshotUrls: 'https://i.gkd.li/i/15524706',
        },
        {
          key: 1,
          matches: ['[text^="关闭自启动后将导致"]', '[text="关闭"]'],
          snapshotUrls: 'https://i.gkd.li/i/15531343',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-自动允许分享文件',
      desc: '允许应用通过分享获取手机文件',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.miui.wakepath.ui.ConfirmStartActivity',
          matches: ['[text="分享文件"]', '[text="允许"]'],
          exampleUrls: 'https://e.gkd.li/02c752e7-3dd9-47dc-819b-e8246de29b6a',
          snapshotUrls: 'https://i.gkd.li/i/17174152',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-自动关闭SIM卡安全保护验证提示',
      desc: '点击[确定]',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.miui.simlock.activity.SuccessDialogActivity',
            'com.miui.simlock.activity.SuccessDialogNormalActivity',
          ],
          matches: ['[text="SIM卡安全保护验证成功"]', '[text="确定"]'],
          exampleUrls: 'https://e.gkd.li/2274c673-a2a9-43ad-a5ab-74598787ec0f',
          snapshotUrls: [
            'https://i.gkd.li/i/17276599',
            'https://i.gkd.li/i/17276586',
          ],
        },
      ],
    },
  ],
});
