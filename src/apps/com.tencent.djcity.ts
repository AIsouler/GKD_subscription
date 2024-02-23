import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.djcity',
  name: '掌上道聚城',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.tencent.djcity.activities.homepage.MainActivity',
          matches:
            '[vid="main_container"] >7 View[childCount=7] > View[childCount=2] > View[index=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/57941037/151fd8a5-8c44-4368-a8ba-3563df44e492',
          snapshotUrls: 'https://i.gkd.li/i/14229532',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-"签到成功"弹窗',
      desc: '点击"好的"',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tencent.djcity.activities.homepage.MainActivity',
          matches: '@View[clickable=true] > [desc="好的"]',
          exampleUrls:
            'https://m.gkd.li/57941037/22ba335b-c225-41f0-97be-a91377ebc121',
          snapshotUrls: 'https://i.gkd.li/i/14229554',
        },
      ],
    },
  ],
});
