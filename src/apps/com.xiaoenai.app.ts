import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaoenai.app',
  name: '小恩爱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/13727905',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13867880',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告',
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '腾讯广告SDK',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/i/13728018',
            'https://i.gkd.li/i/13867878',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-信息流广告',
      activityIds:
        'com.xiaoenai.app.presentation.home.view.activity.HomeActivity',
      rules: [
        {
          name: '字节广告SDK',
          quickFind: true,
          matches:
            '@ImageView[clickable=true][width<90][height<90] -3 ImageView <<n [id="com.xiaoenai.app:id/view_ad_tpl"]',
          snapshotUrls: 'https://i.gkd.li/i/13728026',
        },
      ],
    },
  ],
});
