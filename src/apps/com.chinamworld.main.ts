import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '我的页面-广告弹窗',
      activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
      rules:
        '[id="com.chinamworld.main:id/indicator_container_container"] + [id="com.chinamworld.main:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/12726961',
    },
  ],
});
