import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mm.android.lchg',
  name: '乐橙含光',
  groups: [
    {
      key: 0,
      enable: false,
      name: '更新提示',
      desc: '点击稍后再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.mm.android.lchg:id/btn_cancel"][text*="稍后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13540871',
        },
      ],
    },
  ],
});
