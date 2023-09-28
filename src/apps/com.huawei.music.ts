import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.android.mediacenter.PageActivity'],
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12745222'],
        },
      ],
    },
  ],
});
