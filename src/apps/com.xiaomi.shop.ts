import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '首页弹窗广告',
      activityIds: 'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
      rules:
        'LinearLayout[childCount=2] > ImageView[id=null] + ImageView[id=null][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12649330'],
    },
  ],
});
