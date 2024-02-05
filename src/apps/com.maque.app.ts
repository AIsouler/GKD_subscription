import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maque.app',
  name: '麻雀省钱',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules:
        'ViewGroup[childCount=2] > ImageView[clickable=true] + ViewGroup[clickable=true][childCount=1] > ImageView[id=null][clickable=false]',
      snapshotUrls: 'https://i.gkd.li/import/12640100',
    },
  ],
});
