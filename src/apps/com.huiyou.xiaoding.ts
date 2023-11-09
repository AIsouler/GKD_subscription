import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huiyou.xiaoding',
  name: '校钉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.huiyou.xiaoding.launcher.LauncherActivity'],
      rules: [
        {
          matches: '[id="com.huiyou.xiaoding:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12699825'],
        },
        {
          matches: '[id="com.huiyou.xiaoding:id/skip_parent_view"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12699822'],
        },
        {
          matches:
            '[id="com.huiyou.xiaoding:id/id_splash_container"] TextView[text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/import/12699790'],
        },
      ],
    },
  ],
});
