import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  groups: [
    {
      key: 2,
      name: '分段广告-为什么不希望看到这条推广',
      desc: '点击"不感兴趣"',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
        'com.android.calendar.homepage.AllInOneActivity',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '[text="不感兴趣"][clickable=true]',
            '@[clickable=true] > [text="不感兴趣"][clickable=false][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13227328',
            'https://i.gkd.li/i/13255751',
            'https://i.gkd.li/i/14946925',
            'https://i.gkd.li/i/23619341',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          fastQuery: true,
          anyMatches: [
            '[text="广告密集"][clickable=true]',
            '@[clickable=true] > [text="广告密集"][clickable=false][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19636920',
            'https://i.gkd.li/i/23619357',
          ],
        },
      ],
    },
  ],
});
