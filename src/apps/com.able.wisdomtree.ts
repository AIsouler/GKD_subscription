import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      activityIds:
        'com.example.advertisement_business.advertisement.AdvertisementActivity',
      rules: [
        {
          matches: ['[id="com.able.wisdomtree:id/tv_skip"]'],
          snapshotUrls: 'https://i.gkd.li/import/12838048',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '消息推送通知',
      desc: '自动点击暂不开启。',
      quickFind: true,
      activityIds: [
        'com.able.wisdomtree.widget.MyAlertDialog',
        'com.able.wisdomtree.login.MainGroupActivity',
      ],
      rules: 'TextView[id="com.able.wisdomtree:id/negativeButton"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13458779',
        'https://i.gkd.li/import/13623441',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '升级提醒',
      desc: '自动点击忽略。',
      quickFind: true,
      activityIds:
        'com.example.advertisement_business.advertisement.AdvertisementActivity',
      rules: '[text="更新"] -n [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/import/13458796',
    },
  ],
});
