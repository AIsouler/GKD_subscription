import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingluo.allcolor',
  name: '一起来涂色',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.cccgame.android.MainActivity'],
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12640349'],
    },
    {
      enable: false,
      key: 1,
      name: '底部穿山甲广告',
      desc: '点击广告卡片x关闭按钮-关闭反馈理由弹窗',
      activityIds: [
        'com.cccgame.android.MainActivity',
        'com.bytedance.sdk.openadsdk.core.dislike.ui.c',
      ],
      rules: [
        {
          preKeys: [1, 2, 3, 4],
          name: '穿山甲广告-反馈理由',
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/import/12640358',
        },
        {
          key: 1,
          matches: ['[text="广告"] < * - View < * - View > Image[id=null]'],
          snapshotUrls: ['https://i.gkd.li/import/import/12640359'],
        },
        {
          key: 2,
          matches: [
            '@Image[id=null] < View -(2) View > View > View > TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/import/12640362'],
        },
        {
          key: 3,
          matches: [
            '@View[id=null] < FrameLayout[desc^="dislike"] + FrameLayout >(2) TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/import/12640374'],
        },
        {
          key: 4,
          matches: [
            '@Image[id=null] < View - View > View + View > TextView[text="广告"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/import/12640406'],
        },
      ],
    },
  ],
});
