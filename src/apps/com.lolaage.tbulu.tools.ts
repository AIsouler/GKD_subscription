import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12882538',
        'https://i.gkd.li/import/13627860',
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12882550',
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
          matches:
            'ImageView -2 FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13627861',
        },
      ],
    },
  ],
});
