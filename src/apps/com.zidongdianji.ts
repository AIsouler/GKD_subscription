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
          key: 4,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][width<80 && height<80] <2 LinearLayout +2 LinearLayout > [text="详情点击"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/029e9494-fb0a-4752-8711-1f6e68684ef5',
          snapshotUrls: 'https://i.gkd.li/i/24336331',
        },
        {
          preKeys: [1, 3, 4],
          key: 2,
          matches: '@[clickable=true] >n [text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/560a7da4-64f5-4dc7-899c-60856241662f',
          snapshotUrls: [
            'https://i.gkd.li/i/14783475',
            'https://i.gkd.li/i/24336327',
          ],
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
