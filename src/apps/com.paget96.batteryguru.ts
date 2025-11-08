import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paget96.batteryguru',
  name: 'Battery Guru',
  groups: [
    {
      key: 1,
      name: '全屏广告-免费订阅',
      desc: '点击关闭',
      rules: [
        {
          matchRoot: true,
          position: {
            left: 'width/2',
            top: 'height/2',
          },
          activityIds: [
            'com.paget96.batteryguru.activities.IntroActivity',
            'com.google.android.gms.ads.AdActivity',
            'activities.MainActivity',
          ],
          matches:
            '@Button[text=""][clickable=true][visibleToUser=true][childCount=0][index=0]',
          exampleUrls: 'https://e.gkd.li/83bc035c-8e6c-48d7-a84f-c8dcee9b4b4b',
          snapshotUrls: 'https://i.gkd.li/i/23416244',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '[id="ad_container"] >3 [id="video_container"] >3 Button[clickable=true][childCount=0][id=null][text=""][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/40c72a7b-3e68-496f-a993-43ab9c759cbd',
          snapshotUrls: 'https://i.gkd.li/i/23417592',
        },
        {
          key: 1,
          activityIds: '.activities.IntroActivity',
          matches:
            '@Button[clickable=true][childCount=0][id=null] < View[childCount=1] <3 View - [id="app-interstitial-slot"] >2 [id="abgcp"]',
          snapshotUrls: 'https://i.gkd.li/i/23416244',
        },
      ],
    },
  ],
});
