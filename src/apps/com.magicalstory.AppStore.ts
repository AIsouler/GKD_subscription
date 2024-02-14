import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  deprecatedKeys: [6],
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: [
            'com.magicalstory.AppStore.appDetails.AppDetailsActivity',
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          ],
          excludeActivityIds: 'com.magicalstory.AppStore.search.searchActivity', // 排除搜索页，搜索页的规则见 key: 1
          matches:
            '[visibleToUser=true] - [vid^="banner"] >n FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[visibleToUser=true] < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13413482',
            'https://i.gkd.li/import/13416979',
            'https://i.gkd.li/import/13527698',
            'https://i.gkd.li/import/13759492', // 限定 visibleToUser, 防止误触
            'https://i.gkd.li/import/14273176', // 限定 visibleToUser, 防止误触
            'https://i.gkd.li/import/14273317', // 限定 visibleToUser, 防止误触
          ],
        },
        {
          key: 1,
          name: '腾讯广告-搜索页面',
          activityIds: 'com.magicalstory.AppStore.search.searchActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13185746',
            'https://i.gkd.li/import/13695554',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.magicalstory.AppStore.main.MainActivity',
          matches: '[id="com.magicalstory.AppStore:id/button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13443417',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告',
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
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13459373',
    },
  ],
});
