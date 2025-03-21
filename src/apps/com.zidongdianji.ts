import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zidongdianji',
  name: '自动点击器',
  groups: [
    {
      key: 1,
      name: '分段广告-卡片广告',
      fastQuery: true,
      matchRoot: true,
      forcedTime: 10000,
      activityIds: 'com.autoclicker.clicker.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            'WebView >3 View[childCount=2] > View[childCount=4] > View[childCount=1] > @Image[childCount=0][visibleToUser=true][text=""] <<n [vid="native_ad_container_top" || vid="rv_record"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14782886',
            'https://i.gkd.li/i/16646833',
          ],
        },
        {
          key: 3,
          position: {
            left: 'width * 0.9481',
            top: 'width * 0.0778',
          },
          matches:
            'WebView > View[childCount=2] > TextView[text!=null][visibleToUser=false] + @View[visibleToUser=true][childCount=0] <<n [vid="rv_record"]',
          exampleUrls: 'https://e.gkd.li/ab8308a9-a237-49ee-8ed5-38e6d543acf0',
          snapshotUrls: 'https://i.gkd.li/i/16742931',
        },
        {
          preKeys: [1, 3],
          key: 2,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14783475',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.autoclicker.clicker.MainActivity',
          matches: '[vid="img_native_ad_default_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e6b14a8f-6533-4601-92b8-f5032fc18234',
          snapshotUrls: 'https://i.gkd.li/i/19381476',
        },
      ],
    },
  ],
});
