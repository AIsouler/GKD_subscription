import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.canghai.haoka',
  name: '172号卡',
  groups: [
    {
      key: 1,
      name: '通知提示-[公安部提示]弹窗',
      desc: '点击[我已知晓，并承诺本人使用]',
      rules: [
        {
          activityIds: 'io.dcloud.PandoraEntryActivity',
          matches: '[text="我已知晓，并承诺本人使用"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a2d6a74c-829c-4436-af5b-0893b6269886',
          snapshotUrls: 'https://i.gkd.li/i/15144791',
        },
      ],
    },
  ],
});
