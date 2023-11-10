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
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683145',
            'https://i.gkd.li/import/12683173', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
        {
          matches: '[id="info.muge.appshare:id/tv_jump"][text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12683168',
        },
        {
          matches:
            'ImageView -(4) LinearLayout[childCount=2] > [id=null][text^="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683211',
            'https://i.gkd.li/import/12748893',
          ],
        },
      ],
    },
  ],
});
