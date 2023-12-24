import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.zuoyebang.knowledge:id/ms_skipView"]',
      snapshotUrls: 'https://i.gkd.li/import/13296260',
    },
    {
      key: 1,
      name: '更新提醒',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.zuoyebang.knowledge:id/cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13695522',
    },
    {
      key: 3,
      name: '赏好评弹窗',
      quickFind: true,
      activityIds: 'com.baidu.homework.activity.init.InitActivity',
      rules: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
      snapshotUrls: 'https://i.gkd.li/import/13043228',
    },
  ],
});
