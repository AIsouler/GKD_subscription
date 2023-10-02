import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.qcymall.earphonesetup.v2ui.activity.AdvertiseActivity',
        'com.qcymall.earphonesetup.ServiceLaunchActivity',
      ],
      rules: '[id="com.qcymall.earphonesetup:id/count_time"] + [text="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12776001',
        'https://gkd-kit.songe.li/import/12776002',
      ],
    },
  ],
});
