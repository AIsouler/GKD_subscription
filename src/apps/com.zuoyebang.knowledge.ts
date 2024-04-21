import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.zuoyebang.knowledge:id/cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/i/13695522',
    },
    {
      key: 3,
      name: '评价提示-赏好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/i/13043228',
    },
  ],
});
