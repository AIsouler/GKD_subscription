import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oidalmn.donrv',
  name: '番喜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="top_close_button"] < ViewGroup[childCount=1] <n ViewGroup >(2,3) [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0e4b7af0-5708-4be7-b1e9-87b469d9cadb',
          snapshotUrls: [
            'https://i.gkd.li/i/24325415',
            'https://i.gkd.li/i/24325538',
          ],
        },
      ],
    },
  ],
});
