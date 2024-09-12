import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 2,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年模式"] +(3) [text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12701050',
        'https://i.gkd.li/i/13498556',
      ],
    },
    {
      key: 3,
      name: '全屏广告-视频推荐弹窗',
      fastQuery: true,
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://i.gkd.li/i/12701029',
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[text="关闭广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/529c75b6-1a97-4765-856b-dd4d4c810207',
          snapshotUrls: 'https://i.gkd.li/i/14321401',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="xadsdk_pause_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/42773084-a7db-4e70-878d-6a5eacd5ecb2',
          snapshotUrls: 'https://i.gkd.li/i/14321469',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '视频播放时的广告',
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="novelad_corner_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8994fdc0-fce0-4a06-8bc5-2ff23fc3afe5',
          snapshotUrls: 'https://i.gkd.li/i/14321461',
        },
        {
          key: 1,
          name: '历史记录/搜索页面广告',
          fastQuery: true,
          activityIds: [
            'com.youku.android.youkuhistory.activity.HistoryActivity',
            'com.soku.searchsdk.activity.SearchActivity',
          ],
          matches: '[vid="novel_banner_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a160f41-b101-40dc-b875-533623228406',
          snapshotUrls: [
            'https://i.gkd.li/i/14670383',
            'https://i.gkd.li/i/14680702',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[vid="xadsdk_banner_ad_close"]',
          exampleUrls: 'https://e.gkd.li/8577d2e5-20a4-40e0-92f0-191bafeb55ed',
          snapshotUrls: 'https://i.gkd.li/i/16925042',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-首页卡片广告',
      fastQuery: true,
      activityIds: 'com.youku.v2.HomePageEntry',
      rules: [
        {
          key: 0,
          matches: '[vid="novel_banner_ad_feed_back"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6ae8cc7b-1302-4f10-b544-8d8265a69610',
          snapshotUrls: 'https://i.gkd.li/i/16925043',
        },
        {
          preKeys: [0],
          matches: '[text="就是不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/be57974c-6656-4619-aed8-c61421f6a748',
          snapshotUrls: 'https://i.gkd.li/i/16977036',
        },
      ],
    },
  ],
});
