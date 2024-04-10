import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.timeplan.p5',
  name: '烟花动漫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '[id="android:id/content"] >5 ImageView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/3bfe1e95-56ed-43f7-b40c-e523953e71f6',
          snapshotUrls: 'https://i.gkd.li/i/14481496',
        },
      ],
    },
  ],
});
