import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
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
        {
          key: 2,
          matches: '[vid="ms_item_pre_render_large_iamge_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15137361',
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
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <(2,3) * >(2,3) [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14945552',
            'https://i.gkd.li/i/15286451',
          ],
        },
        {
          key: 1,
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14964868',
            'https://i.gkd.li/i/14969910', // 避免误触
          ],
        },
      ],
    },
  ],
});
