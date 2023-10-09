import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12847303',
    },
    {
      key: 1,
      name: '悬浮广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules: 'ViewGroup[childCount=2] > @ImageView[id!=null] + ImageView',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12847323',
        'https://gkd-kit.gitee.io/import/12847336',
      ],
    },
    {
      key: 2,
      name: '信息流内嵌广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      rules: 'ImageView - ViewGroup > ImageView + ImageView + ImageView',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12847340',
        'https://gkd-kit.gitee.io/import/12847364',
      ],
    },
  ],
});
