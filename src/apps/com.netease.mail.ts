import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12893573',
            'https://i.gkd.li/import/12923776',
            'https://i.gkd.li/import/13195662',
            'https://i.gkd.li/import/12818335',
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12999739',
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
    {
      key: 2,
      name: '邮件列表广告',
      activityIds: ['com.netease.mail.biz.main.MainITabActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_arrow"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12999833',
        },
        {
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12999841',
        },
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12664070',
    },
  ],
});
