import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '局部广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
            'com.babycloud.hanju.ui.activity.HanjuHomeActivity',
            'com.babycloud.hanju.search.activity.SearchActivity',
          ],
          quickFind: true,
          matches:
            '[id="com.babycloud.hanju:id/unified_ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13628282',
            'https://i.gkd.li/import/13670721',
            'https://i.gkd.li/import/13849929',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-视频播放时的弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
          matches:
            '@RelativeLayout[childCount=1] [vid*="skip_tv" || vid*="close_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13800123',
            'https://i.gkd.li/import/13972345',
            'https://i.gkd.li/import/14048532',
            'https://i.gkd.li/import/14048302',
          ],
        },
      ],
    },
  ],
});
