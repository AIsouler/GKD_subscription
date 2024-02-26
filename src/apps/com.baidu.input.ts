import { defineAppConfig } from '../types';
export default defineAppConfig({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          exampleUrls:
            'https://m.gkd.li/57941037/1cddb43c-9ddc-4fb0-a781-66f167035d2b',
          snapshotUrls: 'https://i.gkd.li/i/14406395',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="android:id/content"] >2 [vid="button_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14179064',
    },
    {
      key: 2,
      name: '局部广告-皮肤页-底部VIP弹窗',
      activityIds: 'com.baidu.input.ImeAppMainActivity',
      rules: '[desc="开会员，全部皮肤免费用"] +5 View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14179107',
    },
  ],
});
