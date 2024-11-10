import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.viva.timeplan.p5',
  name: '烟花动漫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout > [text="反馈"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3bfe1e95-56ed-43f7-b40c-e523953e71f6',
          snapshotUrls: 'https://i.gkd.li/i/14481496',
        },
      ],
    },
  ],
});
