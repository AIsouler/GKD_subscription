import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rarlab.rar',
  name: 'RAR',
  groups: [
    {
      key: 10,
      name: '全屏广告-订购 RAR 弹窗',
      desc: '自动点击"放弃"',
      activityIds: 'com.rarlab.rar.MainActivity',
      rules: '[text~="(订购|訂閱)"] + [text~="(放弃|解除)"]',
      snapshotUrls: 'https://i.gkd.li/i/12781596',
    },
  ],
});
