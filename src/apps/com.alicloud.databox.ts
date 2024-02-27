import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      activityIds: [
        'com.alicloud.databox.MainActivity',
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
      ],
      rules: [
        {
          key: 0,
          name: '自动点击签到',
          quickFind: true,
          matches: '[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]',
          snapshotUrls: 'https://i.gkd.li/i/12929318',
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后，关闭弹窗',
          quickFind: true,
          matches: '[id="com.alicloud.databox:id/ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038304',
            'https://i.gkd.li/i/14235221', // com.alicloud.databox.navigation.NavigationFragmentContainerActivity
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules:
        '[id="com.alicloud.databox:id/webContainer"] >5 View[childCount=3] > TextView[index=1]',
      snapshotUrls: [
        'https://i.gkd.li/i/13228610',
        'https://i.gkd.li/i/14235204',
      ],
    },
    {
      key: 2,
      name: '功能类-时光设备间页面自动点击“开心收下”',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/i/13596924',
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="立即了解"] -3 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13806865',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-[开启相册自动备份功能]弹窗',
      desc: '关闭弹窗',
      rules: [
        {
          activityIds: 'com.alicloud.databox.MainActivity',
          matches:
            '[vid="webContainer"] >5 View[childCount=4] > TextView[index=3][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414446',
        },
      ],
    },
  ],
});
