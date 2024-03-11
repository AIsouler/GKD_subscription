import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xxx.pornhub.fuck',
  name: 'JavDB',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击[知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches:
            '[desc="公告"] + * + @[desc="知道了"] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ae1792dd-210b-4ac2-bfce-c2081ed03498',
          snapshotUrls: 'https://i.gkd.li/i/14559882',
        },
      ],
    },
  ],
});
