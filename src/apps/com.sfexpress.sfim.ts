import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfexpress.sfim',
  name: '丰声',
  groups: [
    {
      key: 10,
      name: '功能类-登录确认',
      desc: '自动点击"登录"按钮',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.sfexpress.sfim.scan.view.SfScanActivity',
            'com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity',
            'com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog',
          ],
          matches: '@[text="登录"] <<n [vid="flContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745239',
            'https://i.gkd.li/i/12745240',
            'https://i.gkd.li/i/12745241',
            'https://i.gkd.li/i/14830687',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.sfexpress.sfim.middleplatform.ui.SFMiddlePlatformLoginActivity',
          matches: '[text="登录"]',
          snapshotUrls: 'https://i.gkd.li/i/14830682',
        },
      ],
    },
  ],
});
