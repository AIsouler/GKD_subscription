import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  deprecatedKeys: [3],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12668545',
    },
    {
      key: 1,
      name: '词条页面广告',
      activityIds: 'com.youdao.dict.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="广告"] - [id="com.youdao.dict:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/12668574',
        },
        {
          key: 1,
          matches: '[id="com.youdao.dict:id/close_pop"][text="收起广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12668583',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '首页-弹窗广告',
          activityIds: [
            'com.youdao.dict.activity.MainActivity',
            'com.youdao.dict.activity.DictSplashActivity',
          ],
          quickFind: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12893419',
            'https://i.gkd.li/import/13263801',
          ],
        },
        {
          key: 1,
          name: '学习页面-弹窗广告',
          activityIds: 'com.youdao.dict.edu.main.MainPopDialog',
          quickFind: true,
          matches: '@ImageView[id="com.youdao.dict:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893450',
        },
      ],
    },
    {
      key: 4,
      name: 'VIP-弹窗',
      activityIds: 'com.youdao.dict.vip.activity.RecallSevenDayVipActivity',
      rules: '@ImageView[id="com.youdao.dict:id/iv_close"]',
      quickFind: true,
      snapshotUrls: 'https://i.gkd.li/import/13263706',
    },
    {
      key: 5,
      name: '评价弹窗',
      activityIds: 'com.youdao.dict.activity.MainActivity',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      matchDelay: 10000,
      rules: '[id="com.youdao.dict:id/btn_never"][text*="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13540941',
    },
    {
      key: 6,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.youdao.dict:id/tv_version"] + [id="com.youdao.dict:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13627912',
    },
  ],
});
