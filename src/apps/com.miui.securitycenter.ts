import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.securitycenter',
  name: '小米手机管家',
  groups: [
    {
      key: 10,
      name: '功能类-自动继续安装',
      desc: 'USB安装应用,点击继续安装',
      quickFind: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[id="android:id/button2"]',
          snapshotUrls: 'https://i.gkd.li/i/13269875',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-禁止获取定位',
      desc: '关闭"允许联网及定位"后，每次打开手机管家都会出现',
      quickFind: true,
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
      name: '功能类-忽略体检分数',
      desc: '退出时忽略体检优化分数',
      quickFind: true,
      activityIds: 'com.miui.securityscan.MainActivity',
      rules: [
        {
          matches: [
            '[text="手机体检分数不足75分，是否立即优化？"][id$="id/message"]',
            '[text="退出"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13474504', // app版本v5
            'https://i.gkd.li/i/13476770', // app版本v8
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
          quickFind: true,
          matches: '@[text="知道了"] + [text="省电模式"]',
          snapshotUrls: 'https://i.gkd.li/i/14468423',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-高敏感权限自动确定',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      quickFind: true,
      activityIds:
        'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[checked=false] + [text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e9672ccd-8dd1-4060-bdbe-52bb355d404f',
          snapshotUrls: 'https://i.gkd.li/i/14965657',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1f2a118a-db2a-448d-a95d-f10d746b72e3',
          snapshotUrls: 'https://i.gkd.li/i/14965656',
        },
      ],
    },
  ],
});
