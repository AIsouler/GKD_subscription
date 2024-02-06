import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfexpress.sfim',
  name: '丰声',
  groups: [
    {
      enable: false,
      key: 10,
      name: '功能类-CAS安全认证-自动登录',
      desc: '自动点击"登录"按钮',
      activityIds: [
        'com.sfexpress.sfim.scan.view.SfScanActivity',
        'com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity',
        'com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog',
      ],
      rules: '[text="CAS安全认证"] >n [text="登录"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12745239',
        'https://i.gkd.li/import/12745240',
        'https://i.gkd.li/import/12745241',
      ],
    },
  ],
});
