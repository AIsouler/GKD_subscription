import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/53c0a275-e6f7-42b2-b60e-6998685d30c3',
          snapshotUrls: 'https://i.gkd.li/i/16401925',
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/12642445',
        },
        {
          key: 1,
          matches: '@[desc="取消"] - ViewGroup >n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13291144',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-专属月报弹窗',
      rules: [
        {
          activityIds: 'com.sf.activity.MainActivity',
          matches: '[id="MonthReportDialogCloseBtn"] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a',
          snapshotUrls: 'https://i.gkd.li/i/12642441',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '本月礼包',
          activityIds: 'com.sf.activity.MainActivity',
          matches: '[id="BmsAdDialogViewCloseButton"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6baf1ea4-9424-4360-b28b-7907b0d7aa4a',
          snapshotUrls: 'https://i.gkd.li/i/14502128',
        },
      ],
    },
  ],
});
