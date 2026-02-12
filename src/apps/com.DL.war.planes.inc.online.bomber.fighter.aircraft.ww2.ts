import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.DL.war.planes.inc.online.bomber.fighter.aircraft.ww2',
  name: 'Warplane Inc. Online',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.yandex.mobile.ads.common.AdActivity',
          matches:
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] < ViewGroup <3 ViewGroup <2 ViewGroup +5 [text="Learn more"]',
          snapshotUrls: 'https://i.gkd.li/i/25241260',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.yandex.mobile.ads.common.AdActivity',
          matches: '@ImageView - ViewGroup >2 [text="AD"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25241244',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.applovin.adview.AppLovinFullscreenActivity',
          matches:
            'View[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/25241191',
        },
      ],
    },
  ],
});
