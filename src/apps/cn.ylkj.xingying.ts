import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ylkj.xingying',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'cn.ylkj.xingying.MainActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/66b19fbd-b82d-4f10-b82d-0fc74c146b1c',
          snapshotUrls: 'https://i.gkd.li/i/14783306',
        },
      ],
    },
  ],
});
