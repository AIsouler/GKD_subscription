import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youku.phone',
  name: '优酷视频',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="青少年模式"] +(3) [text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12701050',
        'https://i.gkd.li/import/13498556',
      ],
    },
    {
      key: 3,
      name: '全屏广告-视频推荐弹窗',
      quickFind: true,
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://i.gkd.li/import/12701029',
    },
    {
      key: 4,
      name: '全屏广告-视频播放时的广告',
      desc: '点击[关闭广告]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.youku.ui.activity.DetailActivity',
          matches: '[text="关闭广告"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/529c75b6-1a97-4765-856b-dd4d4c810207',
          snapshotUrls: 'https://i.gkd.li/import/14321401',
        },
      ],
    },
  ],
});
