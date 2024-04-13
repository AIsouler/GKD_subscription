import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.growing.topwidgets',
  name: '万能小组件 Top Widgets',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.growing.topwidgets.home.MainActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView < * - * > [text="立即打开"]',
          snapshotUrls: 'https://i.gkd.li/i/14892835',
        },
        {
          key: 1,
          matches: '@ImageView < * - * > [text="查看详情"]',
          snapshotUrls: 'https://i.gkd.li/i/14945536',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView[clickable=true] - * >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/14945552',
        },
        {
          key: 1,
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14964868',
        },
      ],
    },
  ],
});
