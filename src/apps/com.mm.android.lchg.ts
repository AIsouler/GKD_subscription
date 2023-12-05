import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mm.android.lchg',
  name: '乐橙含光',
  groups: [
    {
      key: 0,
      enable: false,
      name: '升级弹窗',
      activityIds: 'com.lc.mine.view.activity.AboutActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.mm.android.lchg:id/btn_cancel"][text*="稍后再说"]',
          snapshotUrls: 'https://i.gkd.li/import/13540871',
        },
      ],
    },
  ],
});
