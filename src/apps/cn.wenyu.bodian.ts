import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wenyu.bodian',
  name: '波点音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds: 'cn.wenyu.bodian.MainActivity',
      rules:
        '[id="cn.wenyu.bodian:id/splash_container"] < FrameLayout > TextView[text="跳过广告"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13062529',
    },
  ],
});
