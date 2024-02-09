import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击跳过',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@View[clickable=true] <3 * <2 * < FrameLayout[id="com.mymoney:id/external_ad_content"]',
          snapshotUrls: 'https://i.gkd.li/import/13855760',
        },
        {
          key: 1, //全局规则将该应用排除
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13939216',
            'https://i.gkd.li/import/13939163',
          ],
        },
      ],
    },
  ],
});
