import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.drakeet.puremosaic',
  name: '纯纯打码',
  groups: [
    {
      key: 1,
      name: '全屏广告-解锁高级功能',
      desc: '点击“不”',
      fastQuery: true,
      activityIds: ['.MainActivity', 'me.iwf.photopicker.PhotoPickerActivity'],
      rules: [
        {
          matches: ['[text="解锁高级功能"]', '[text="不"]'],
          action: 'clickNode',
          snapshotUrls: [
            'https://i.gkd.li/i/16761630',
            'https://i.gkd.li/i/16761818',
          ],
        },
      ],
    },
  ],
});
