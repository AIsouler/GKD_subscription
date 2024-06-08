import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaiduizuoye.scan',
  name: '快对',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15746254',
        },
        {
          key: 1,
          action: 'clickCenter',
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/15741399',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.hihonor.android.launcher.drawer.DrawerLauncher',
      rules: '[id="com.kuaiduizuoye.scan:id/iv_advertisement_widget_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12716285',
    },
  ],
});
