import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.paper',
  name: '澎湃新闻',
  groups: [
    {
      key: 2,
      name: '应用内弹窗',
      activityIds: ['cn.thepaper.paper.ui.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="com.wondertek.paper:id/second_num"] <2 [id="com.wondertek.paper:id/relative_layout"] + [id="com.wondertek.paper:id/close_photo"]',
          snapshotUrls: ['https://i.gkd.li/import/12899226'],
        },
      ],
    },
  ],
});
