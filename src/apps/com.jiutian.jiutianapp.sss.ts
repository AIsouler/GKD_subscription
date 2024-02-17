import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jiutian.jiutianapp.sss',
  name: '速搜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=5] >2 ImageView[visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/93c98c6f-56f9-4c57-a8b4-ff8a74900c1e',
          snapshotUrls: 'https://i.gkd.li/import/14318888',
        },
      ],
    },
  ],
});
