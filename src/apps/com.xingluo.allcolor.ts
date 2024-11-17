import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingluo.allcolor',
  name: '一起来涂色',
  groups: [
    {
      key: 1,
      name: '分段广告-底部穿山甲广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: [
        'com.cccgame.android.MainActivity',
        'com.bytedance.sdk.openadsdk.core.dislike.ui.c',
      ],
      rules: [
        {
          key: 1,
          matches: ['[text="广告"] < * - View < * - View > Image[id=null]'],
          snapshotUrls: ['https://i.gkd.li/i/12640359'],
        },
        {
          key: 2,
          matches: [
            '@Image[id=null] < View -(2) View > View > View > TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12640362'],
        },
        {
          key: 3,
          matches: [
            '@View[id=null] < FrameLayout[desc^="dislike"] + FrameLayout >(2) TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12640374'],
        },
        {
          key: 4,
          matches: [
            '@Image[id=null] < View - View > View + View > TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12640406'],
        },
        {
          preKeys: [1, 2, 3, 4],
          name: '穿山甲广告-反馈理由',
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12640358',
        },
      ],
    },
  ],
});
