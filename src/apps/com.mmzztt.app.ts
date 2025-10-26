import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mmzztt.app',
  name: '美之图',
  groups: [
    {
      key: 1,
      name: '其他-提示[切换高清]时点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.uzmap.pkg.EntranceActivity',
          matches: [
            '[text="切换高清"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ea71f47e-13e3-4980-a6d6-d8e8faf27541',
          snapshotUrls: 'https://i.gkd.li/i/23146683',
        },
      ],
    },
  ],
});
