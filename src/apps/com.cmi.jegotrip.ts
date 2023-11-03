import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmi.jegotrip',
  name: '无忧行',
  groups: [
    {
      key: 3,
      name: '请求定位权限弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.cmi.jegotrip.ui.BottomTabsActivity',
      rules:
        '[text="申请定位权限说明"] < LinearLayout +2 LinearLayout [id="com.cmi.jegotrip:id/btn_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13232766',
    },
  ],
});
