import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.tmgp.kgame.ppcr',
  name: '全民泡泡超人',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx"]',
          snapshotUrls: ['https://i.gkd.li/i/13276317'],
        },
      ],
    },
  ],
});
