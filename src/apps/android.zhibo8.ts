import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          matches: '[id="android.zhibo8:id/tv_skip_text"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700387',
        },
        {
          matches: '[id="android.zhibo8:id/asv_splash"] TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12661109',
        },
      ],
    },
  ],
});
