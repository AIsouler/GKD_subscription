import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '好评弹窗',
      activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="com.mi.health:id/nextView"][text="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13258813',
    },
  ],
});
