import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hidisk',
  name: '云空间',
  groups: [
    {
      key: 1,
      name: '全屏广告-[升级云空间]弹窗',
      desc: '点击[放弃]/[以后再说]',
      quickFind: true,
      activityIds:
        'com.huawei.android.hicloud.ui.activity.BackupNotificationActivity',
      rules: [
        {
          key: 0,
          matches: '[text="免费升级云空间"] +2 * > [text="放弃"]',
          exampleUrls:
            'https://m.gkd.li/57941037/0b2dc8b3-a9b4-48ed-a680-d01d7945cd46',
          snapshotUrls: 'https://i.gkd.li/i/14881774',
        },
        {
          key: 1,
          matches: '[text="以后再说"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dd870248-a785-4fd7-81bb-8366c3169340',
          snapshotUrls: 'https://i.gkd.li/i/14881775',
        },
        {
          key: 2,
          activityIds:
            'com.huawei.android.hicloud.ui.activity.GuideWebViewActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][index=0] <<n [vid="guid_webview_mian"]',
          snapshotUrls: 'https://i.gkd.li/i/15523963',
        },
      ],
    },
  ],
});
