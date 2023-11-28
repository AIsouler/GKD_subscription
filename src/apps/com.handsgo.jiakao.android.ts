import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.handsgo.jiakao.android:id/closeLayout`]', // 缺少快照
    },
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches:
            '@[id="com.handsgo.jiakao.android:id/ivDelete"] + [id="com.handsgo.jiakao.android:id/ivRemote"]',
          snapshotUrls: 'https://i.gkd.li/import/13475994',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13476039',
        },
      ],
    },
  ],
});
