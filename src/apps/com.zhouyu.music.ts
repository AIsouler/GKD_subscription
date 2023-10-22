import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhouyu.music',
  name: '微音乐',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules:
        '@TextView[id=null][clickable=true] + View > View > View [text="广告"]',
      snapshotUrls: 'https://i.gkd.li/import/13062330',
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/798afc53-4aaf-481f-acb1-7c193bd8e6d6',
    },
  ],
});
