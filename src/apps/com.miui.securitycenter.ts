import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.securitycenter',
  name: '小米手机管家',
  groups: [
    {
      enable: false,
      key: 10,
      name: '功能类-自动继续安装',
      desc: 'USB安装应用,点击继续安装',
      quickFind: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13269875',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '功能类-禁止获取定位',
      desc: '关闭【允许联网及定位】后，每次打开手机管家都会出现',
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
            'https://i.gkd.li/import/13474517',
            'https://i.gkd.li/import/13476592', // activityIds: 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity',
          ],
        },
      ],
    },
    {
      enable: false,
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
            'https://i.gkd.li/import/13474504', // app版本v5
            'https://i.gkd.li/import/13476770', // app版本v8
          ],
        },
      ],
    },
  ],
});
