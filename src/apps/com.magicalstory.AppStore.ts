import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
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
          matches: '[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13185745',
            'https://i.gkd.li/import/13191546',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [
            'com.magicalstory.AppStore.search.searchActivity',
            'com.magicalstory.AppStore.appDetails.AppDetailsActivity',
          ],
          matches: [
            '[id^="com.magicalstory.AppStore:id/banner"]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13185746',
            'https://i.gkd.li/import/13413482',
            'https://i.gkd.li/import/13416979',
          ],
        },
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.magicalstory.AppStore.main.MainActivity',
          matches: '[id="com.magicalstory.AppStore:id/button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13443417',
        },
      ],
    },
    {
      key: 2,
      name: '公告',
      activityIds: 'com.magicalstory.AppStore.main.MainActivity',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text*="隐藏"][id="com.magicalstory.AppStore:id/btn_selectNegative"]',
          snapshotUrls: 'https://i.gkd.li/import/13437553',
        },
      ],
    },
    {
      key: 3,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13459373',
    },
  ],
});
