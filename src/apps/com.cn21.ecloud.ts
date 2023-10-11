import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cn21.ecloud',
  name: '天翼云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cn21.ecloud.activity.login.StartActivity',
      rules: '[id="com.cn21.ecloud:id/tv_ad_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12865351',
    },
    {
      key: 1,
      name: '首页弹窗',
      activityIds: ['com.cn21.ecloud.activity.MainPageActivity'],
      rules:
        '[id="com.cn21.ecloud:id/content_frame"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12865481',
        'https://gkd-kit.gitee.io/import/12865488',
      ],
    },
  ],
});
