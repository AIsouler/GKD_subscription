import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.ylkj.xingying',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.ylkj.xingying.MainActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
          exampleUrls:
            'https://m.gkd.li/57941037/66b19fbd-b82d-4f10-b82d-0fc74c146b1c',
          snapshotUrls: 'https://i.gkd.li/i/14783306',
        },
      ],
    },
  ],
});
