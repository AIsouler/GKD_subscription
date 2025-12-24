import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oidalmn.donrv',
  name: '番喜视频',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击[x]',
      rules: [
        {
          activityIds: 'com.oidalmn.donrv.MainActivity',
          matches: '@ViewGroup[desc="top_close_button"][clickable=true]',
          exampleUrls: [
            'https://e.gkd.li/0e4b7af0-5708-4be7-b1e9-87b469d9cadb',
            'https://e.gkd.li/8a5057fb-d112-4045-8ebd-8e88fa3d2820',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24325415',
            'https://i.gkd.li/i/24325538',
          ],
        },
      ],
    },
  ],
});
