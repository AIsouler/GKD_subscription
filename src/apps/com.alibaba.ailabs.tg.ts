import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.alibaba.ailabs.tg:id/ll_download"] + [id="com.alibaba.ailabs.tg:id/va_dialog_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/13296332',
    },
  ],
});
