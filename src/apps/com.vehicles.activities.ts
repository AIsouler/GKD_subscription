import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vehicles.activities',
  name: '车旺大卡',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          name: '卡片弹窗',
          quickFind: true,
          activityIds: [
            'com.sinoiov.cwza.discovery.activity.SpyDetailFragmentActivity',
            'com.vehicles.activities.activity.MainActivity',
            'com.sinoiov.cwza.discovery.activity.TrackDetailActivity',
          ],
          matches: '[id*="iv_close" || id*="iv_cancle"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13952578',
            'https://i.gkd.li/import/13952509',
            'https://i.gkd.li/import/13952532',
          ],
        },
        {
          activityIds:
            'com.sinoiov.cwza.discovery.activity.DrivingDynamicsActivity',
          matches: '[id="android:id/content"] >5 ImageView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13952519',
        },
      ],
    },
  ],
});
