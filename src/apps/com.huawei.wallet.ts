import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
    {
      key: 1,
      name: '局部广告-钱包扩展服务提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches:
            '[text="开启钱包扩展服务"] +2 [id="com.huawei.wallet:id/linear_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13441814',
        },
      ],
    },
  ],
});
