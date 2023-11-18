import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.zhuanzhuan.mcy',
  name: '喵次元',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13391977',
    },
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '更新弹窗',
          matches:
            '[id="com.sjm.zhuanzhuan.mcy:id/tv_new_version"] < LinearLayoutCompat +n [text="立即升级"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/import/13392514',
        },
      ],
    },
  ],
});
