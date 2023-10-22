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
      activityIds: 'com.able.wisdomtree.widget.MyAlertDialog',
      rules: 'TextView[id="com.able.wisdomtree:id/negativeButton"]',
      snapshotUrls: 'https://i.gkd.li/import/12909620',
    },
  ],
});
