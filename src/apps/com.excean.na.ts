import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.na',
  name: '99手游加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14835263',
        },
      ],
    },
    {
      key: 1,
      quickFind: true,
      name: '局部广告-卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.excelliance.kxqp.ui.activity.GameLaunchActivity',
          matches: '[id="com.excean.na:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13931051',
        },
      ],
    },
    {
      key: 2,
      quickFind: true,
      name: '全屏广告-首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          name: '版本:v1.5.3',
          activityIds: 'com.excelliance.kxqp.ui.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] <<5 [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13930990',
        },
        {
          name: '版本:v1.5.5',
          activityIds: 'com.excelliance.kxqp.ui.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] < FrameLayout +2 FrameLayout[childCount=2] TextView[text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/14001254',
        },
      ],
    },
  ],
});
