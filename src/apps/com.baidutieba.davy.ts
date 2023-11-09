import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidutieba.davy',
  name: '贴吧一键签到大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.baidutieba.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidutieba.davy:id/skipBt"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12504282',
    },
    {
      key: 1,
      name: '内部弹窗广告',
      activityIds: 'com.davy.commonlibrary.utils.DialogUtil',
      rules: [
        {
          matches: '[id="com.baidutieba.davy:id/exit"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12504289',
        },
        {
          matches: '[id="com.baidutieba.davy:id/mimo_interstitial_close_img"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12504291',
        },
      ],
    },
  ],
});
