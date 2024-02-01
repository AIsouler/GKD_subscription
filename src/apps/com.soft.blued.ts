import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.blued.android.core.ui.TerminalActivity',
            'com.soft.blued.ui.home.HomeActivity',
          ],
          matches:
            '[id="com.soft.blued:id/fl_main"] [id="com.soft.blued:id/img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12777097',
            'https://i.gkd.li/import/13694950',
            'https://i.gkd.li/import/13699455', // activityIds: 'com.soft.blued.ui.home.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-购买动态投放弹窗',
      desc: '点击X',
      rules: [
        {
          quickFind: true,
          matches: '[id="com.soft.blued:id/iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975',
          snapshotUrls: 'https://i.gkd.li/import/14060676',
        },
      ],
    },
  ],
});
