import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sec.android.app.samsungapps',
  name: '应用商店',
  groups: [
    {
      key: 1,
      name: '功能类-[您是否年满 18 岁？]弹窗',
      desc: '点击[是]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.sec.android.app.samsungapps.SearchResultActivity',
          matches:
            '[text="您是否年满 18 岁？"] +4 @[clickable=true] > [text="是"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cee78493-fbe1-46a0-8dcf-a8b1f1f61f19',
          snapshotUrls: 'https://i.gkd.li/i/14473690',
        },
      ],
    },
  ],
});
