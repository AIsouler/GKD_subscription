import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules:
        '[id=`com.greenpoint.android.mc10086.activity:id/video_time_skip`]',
    },
    {
      key: 1,
      name: '关闭更新弹窗',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12534264',
      rules:
        'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
    },
  ],
});
