import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '来自第三方SDK"穿山甲"',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x',
          matches: '[text="反馈"] +2 View > Image',
          snapshotUrls: [
            'https://i.gkd.li/i/12754919',
            'https://i.gkd.li/i/13324698',
          ],
        },
        {
          key: 1,
          name: '点击右上角[数字s|跳过]',
          matches: '[text="广告"] + View >4 [text="| 跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/12864214'],
        },
        {
          key: 2,
          name: '点击右上角x (2)',
          matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
          snapshotUrls: ['https://i.gkd.li/i/13175439'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.home.MainActivity',
          matches:
            '@[id="com.firebear.androil:id/dismissNtfImgView"] < RelativeLayout - [id="com.firebear.androil:id/contentLay"] >3 TextView[text^="升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12755032',
        },
      ],
    },
  ],
});
