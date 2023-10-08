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
    {
      key: 1,
      name: '信息流广告',
      rules: [
        {
          key: 0,
          name: '点击[查看详情]右侧x',
          matches:
            '@[id="android.zhibo8:id/iv_tip"] - [id="android.zhibo8:id/tv_app_download_2"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841134',
        },
        {
          preKeys: 0,
          name: '点击[不感兴趣]',
          matches: '[id="android.zhibo8:id/tv_title"][text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12841135',
        },
      ],
    },
  ],
});
