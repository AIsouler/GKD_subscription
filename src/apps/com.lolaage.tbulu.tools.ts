import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/i/12882550',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          forcedTime: 10000,
          activityIds: [
            'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
            'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13627861',
            'https://i.gkd.li/i/13650732',
            'https://i.gkd.li/i/14866147',
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
          matches: '[vid="ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/14952807',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示-[发送通知]弹窗',
      desc: '点击[取消]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="发送通知"] + * >3 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/14952803',
        },
      ],
    },
  ],
});
