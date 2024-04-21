import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjm.zhuanzhuan.mcy',
  name: '喵次元',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '更新弹窗',
          matches:
            '[id="com.sjm.zhuanzhuan.mcy:id/tv_new_version"] < LinearLayoutCompat +n [text="立即升级"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/13392514',
        },
      ],
    },
  ],
});
