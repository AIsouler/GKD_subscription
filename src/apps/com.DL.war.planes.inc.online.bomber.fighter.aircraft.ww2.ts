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
          activityIds: [
            'com.yandex.mobile.ads.common.AdActivity',
            'com.applovin.adview.AppLovinFullscreenActivity',
          ],
          matches: [
            '[text="AD"] <<2 ViewGroup + ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]',
            'ViewGroup[childCount=3] >2 ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]',
            '[id="android:id/content"] > FrameLayout[childCount=2] >2 View[index=parent.childCount.minus(1)][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25241260',
            'https://i.gkd.li/i/25241058',
            'https://i.gkd.li/i/25241244',
            'https://i.gkd.li/i/25241191',
          ],
        },
      ],
    },
  ],
});
