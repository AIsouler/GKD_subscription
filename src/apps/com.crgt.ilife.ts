import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crgt.ilife',
  name: '国铁吉讯',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: 'com.crgt.ilife.ui.main.MainPageView',
          matches:
            'FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27',
          snapshotUrls: 'https://i.gkd.li/i/16450332',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.crgt.ilife.ui.main.MainPageView',
          matches:
            '@FrameLayout[childCount=1] - LinearLayout > [text="查看详情"]',
          exampleUrls: 'https://e.gkd.li/15dc994f-ab27-481f-afbe-f6b3f18dde11',
          snapshotUrls: 'https://i.gkd.li/i/16485384',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.crgt.ilife.ui.main.MainPageView',
          matches: '[vid="iv_close"]',
          exampleUrls: 'https://e.gkd.li/43ccfd78-67d7-4dba-a25f-a2f5d62f9c40',
          snapshotUrls: 'https://i.gkd.li/i/16581549',
        },
      ],
    },
  ],
});
