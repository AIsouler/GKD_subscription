import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.vmall.client.base.fragment.VmallWapActivity',
      rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
      snapshotUrls: 'https://i.gkd.li/import/13060881',
    },
  ],
});
