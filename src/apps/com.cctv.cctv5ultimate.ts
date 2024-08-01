import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.cctv5ultimate',
  name: '央视体育',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      activityIds: 'com.cctv.cctv5ultimate.activity.MainActivity',
      rules: [
        {
          matches: [
            '[text="广告"]',
            '[id="com.cctv.cctv5ultimate:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13405159',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-视频暂停时的广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.cctv.cctv5ultimate.videodetail.activity.VideoDetailActivity',
          matches:
            '@ImageView[clickable=true][childCount=0] + LinearLayout > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/26bf9fcc-9dda-4465-a4d5-3fd56a3addde',
          snapshotUrls: 'https://i.gkd.li/i/16454650',
        },
      ],
    },
  ],
});
