import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/12712742',
        },
        {
          matches:
            '@View <2 * <2 * < [id="com.firebear.androil:id/adContainerLay"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13088169',
            'https://i.gkd.li/import/12855707',
            'https://i.gkd.li/import/13927561',
          ],
        },
      ],
    },
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
            'https://i.gkd.li/import/12754919',
            'https://i.gkd.li/import/13324698',
          ],
        },
        {
          key: 1,
          name: '点击右上角[数字s|跳过]',
          matches: '[text="广告"] + View >4 [text="| 跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12864214'],
        },
        {
          key: 2,
          name: '点击右上角x (2)',
          matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
          snapshotUrls: ['https://i.gkd.li/import/13175439'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.firebear.androil.app.home.MainActivity',
      rules:
        '@[id="com.firebear.androil:id/dismissNtfImgView"] < RelativeLayout - [id="com.firebear.androil:id/contentLay"] >3 TextView[text^="升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12755032',
    },
  ],
});
