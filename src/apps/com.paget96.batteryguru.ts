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
            '@Button[id=null][text=""][clickable=true][visibleToUser=true][childCount=0][index=0]',
          exampleUrls: 'https://e.gkd.li/83bc035c-8e6c-48d7-a84f-c8dcee9b4b4b',
          snapshotUrls: 'https://i.gkd.li/i/23416244',
        },
      ],
    },
  ],
});
