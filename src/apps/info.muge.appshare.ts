import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'info.muge.appshare.view.launch.LaunchActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '@[id="com.byted.pangle:id/tt_splash_skip_btn"] + [id="com.byted.pangle:id/tt_splash_ad_logo"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12683145',
            'https://gkd-kit.gitee.io/import/12683173', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
        {
          matches: '[id="info.muge.appshare:id/tv_jump"][text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12683168',
        },
        {
          matches:
            'ImageView -(4) LinearLayout[childCount=2] > [id=null][text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12683211',
        },
      ],
    },
  ],
});
