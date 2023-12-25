import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aster.zhbj',
  name: '喵上漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12981243',
        'https://i.gkd.li/import/13029855',
        'https://i.gkd.li/import/13043320',
        'https://i.gkd.li/import/13043344',
      ],
    },
    {
      key: 1,
      name: '弹窗广告',

      rules: [
        {
          key: 1,
          name: '腾讯广告-1',
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12984767',
            'https://i.gkd.li/import/12998908', // com.huawei.android.launcher.unihome.UniHomeLauncher
            'https://i.gkd.li/import/12777325', // com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 2,
          name: '腾讯广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            'ImageView < FrameLayout + FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13029880',
        },
        {
          key: 3,
          name: '腾讯广告-3',
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/12872249',
        },
        {
          key: 4,
          name: '字节广告-1',
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches: [
            '[desc^="logo-union"] > [desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12903062',
        },
        {
          key: 5,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View + View +n View > View > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12996953',
            'https://i.gkd.li/import/13003644',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '视频广告',
      rules: [
        {
          key: 1,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            'View > View > View > View > [text="广告"]',
            'View[childCount=2] > [text$="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13348662',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '看视频解锁任意读弹窗',
      desc: '自动点击【我拒绝】',
      activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
      rules:
        '[text="看视频解锁任意读"] < LinearLayout +n LinearLayout > [id="com.aster.zhbj:id/btnReject"][text*="拒绝"]',
      snapshotUrls: 'https://i.gkd.li/import/13348635',
    },
  ],
});
