import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules:
        'ViewGroup[childCount=2] > @ImageView[id!=null][clickable=true] + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/12847323',
        'https://i.gkd.li/import/12847336',
        'https://i.gkd.li/import/13063271', // 限定 [clickable=true] 防止在此快照中点击左上角头像
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流内嵌广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules: 'ImageView - ViewGroup > ImageView + ImageView + ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/12847340',
        'https://i.gkd.li/import/12847364',
      ],
    },
  ],
});
