import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
  groups: [
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.baicizhan.main.activity.MainTabActivity',
      rules:
        '[text="反馈"] + ImageView + ImageView[childCount=0][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13415075',
    },
  ],
});
