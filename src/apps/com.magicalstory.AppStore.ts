import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '软件详情页',
          fastQuery: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds: [
            'com.magicalstory.AppStore.appDetails.AppDetailsActivity',
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          ],
          matches: [
            '[vid="itemUser"][visibleToUser=true]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid="bannerLayout"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14771070',
            'https://i.gkd.li/i/14771175',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14771110', // 限定 visibleToUser, 防止误触
            'https://i.gkd.li/i/17879219', // 限定 visibleToUser, 防止误触
          ],
        },
        {
          key: 1,
          name: '搜索页面',
          activityIds: 'com.magicalstory.AppStore.search.searchActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14771429',
        },
        {
          key: 2,
          name: '首页',
          fastQuery: true,
          activityIds: 'com.magicalstory.AppStore.main.MainActivity',
          matches: '[vid="button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/14668408',
        },
        {
          key: 3,
          name: '评论区顶部',
          fastQuery: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds:
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          matches: [
            '[vid="title_browse"][visibleToUser=true]',
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid="banner"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14758809',
            'https://i.gkd.li/i/14783076',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[text="隐藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17892865',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity',
          matches:
            '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13459373',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-首页横幅广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            '[vid="item_broadcast"] >2 [vid="button_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c885f80c-9fd5-4fcc-9117-e8fed04ee300',
          snapshotUrls: 'https://i.gkd.li/i/20259691',
        },
      ],
    },
  ],
});
