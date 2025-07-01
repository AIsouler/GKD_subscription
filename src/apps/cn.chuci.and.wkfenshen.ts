import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.chuci.and.wkfenshen',
  name: '猴子分身',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买会员弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.chuci.and.wkfenshen.ActMain',
          matches: [
            '[id="cn.chuci.and.wkfenshen:id/dialog_local_buy_btn"]',
            '[id="cn.chuci.and.wkfenshen:id/action_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13226988',
        },
      ],
    },
  ],
});
