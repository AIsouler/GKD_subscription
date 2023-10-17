import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: [
        'com.netease.mail.biz.main.MainITabActivity',
        'com.netease.mail.biz.main.SplashActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_skip"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12818335',
        },
        {
          key: 1,
          matches:
            '[id="com.netease.mail:id/ad_placeholder"] >n [text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12893573',
            'https://gkd-kit.songe.li/import/12923776', // com.netease.mail.biz.main.SplashActivity
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: [
        'com.netease.mobimail.module.flutter.CustomFlutterActivity',
      ],
      rules:
        '[id="com.netease.mail:id/tv_ignore_this_version"][text="暂不更新"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12664070',
    },
  ],
});
