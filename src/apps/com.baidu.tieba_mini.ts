import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.tieba_mini',
  name: '贴吧极速版',
  groups: [
    {
      key: 1,
      name: '分段广告-首页信息流广告',
      activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity'],
      rules: [
        {
          key: 0,
          matches: 'LinearLayout > [text="广告"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12905039',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="屏蔽广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12904633'],
        },
      ],
    },
  ],
});
