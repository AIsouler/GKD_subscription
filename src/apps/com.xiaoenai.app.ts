import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaoenai.app',
  name: '小恩爱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13727905',
        },
      ],
    },
    {
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.xiaoenai.app.presentation.home.view.activity.HomeActivity',
      rules: [
        {
          name: '腾讯广告SDK',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: 'https://i.gkd.li/import/13728018',
        },
      ],
    },
    {
      key: 7,
      name: '信息流广告',
      activityIds:
        'com.xiaoenai.app.presentation.home.view.activity.HomeActivity',
      rules: [
        {
          name: '字节广告SDK',
          quickFind: true,
          matches:
            '@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id="com.xiaoenai.app:id/view_ad_tpl"]',
          snapshotUrls: 'https://i.gkd.li/import/13728026',
        },
      ],
    },
  ],
});
