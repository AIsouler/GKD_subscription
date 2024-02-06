import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12882550',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: [
            'https://i.gkd.li/import/13627861',
            'https://i.gkd.li/import/13650732',
          ],
        },
      ],
    },
  ],
});
