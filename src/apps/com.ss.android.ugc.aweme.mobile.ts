import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.mobile',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.ss.android.ugc.aweme.mobile:id/teen_mode_title"] +n [id="com.ss.android.ugc.aweme.mobile:id/bt_i_know"]',
      snapshotUrls: 'https://i.gkd.li/i/13255513',
    },
    {
      key: 2,
      name: '功能类-发现通讯录好友弹窗',
      desc: '点击[暂时不要]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '@[text="暂时不要"] +2 [text="发现好友"]',
          exampleUrls:
            'https://m.gkd.li/57941037/af8632c4-f5fd-403a-aca9-daf92ec6cda1',
          snapshotUrls: 'https://i.gkd.li/i/14467944',
        },
      ],
    },
  ],
});
