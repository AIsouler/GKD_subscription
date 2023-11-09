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
          excludeMatches: '[id="com.netease.mail:id/ad_skip"][clickable=false]',
          snapshotUrls: [
            'https://i.gkd.li/import/12893573',
            'https://i.gkd.li/import/12923776',
            'https://i.gkd.li/import/13195662',
            'https://i.gkd.li/import/12818335',
            'https://i.gkd.li/import/13206298', // 使用 excludeMatches 防止提前触发规则
            'https://i.gkd.li/import/13207736', // TODO 一整块图片，无法跳过
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12999739',
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
      snapshotUrls: 'https://i.gkd.li/import/import/12664070',
    },
    {
      key: 2,
      name: '邮件列表广告',
      activityIds: ['com.netease.mail.biz.main.MainITabActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12999833',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12999841',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/import/12664070',
    },
  ],
});
