import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13459017',
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.vmall.client.base.fragment.VmallWapActivity',
      rules: '[id="com.hihonor.vmall:id/gift_close_iv"]',
      snapshotUrls: 'https://i.gkd.li/import/13060881',
    },
  ],
});
