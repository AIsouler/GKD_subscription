import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.badmintoncn.bbs',
  name: '中羽在线',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/13258044',
        'https://i.gkd.li/import/13379472',
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '红包弹窗',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          quickFind: true,
          matches: '[id="com.badmintoncn.bbs:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13635224',
        },
      ],
    },
  ],
});
