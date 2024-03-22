import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
          ],
          matches: '[id$="iv_ad_free_gif"] + * > [text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4cafd5fd-b5ed-4df1-b9f2-f443f53a7166',
          snapshotUrls: [
            'https://i.gkd.li/i/13546173',
            'https://i.gkd.li/i/14696860',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14018247',
            'https://i.gkd.li/i/13259303',
            'https://i.gkd.li/i/13695497',
          ],
        },
        {
          key: 1,
          matches: '[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/12846434',
            'https://i.gkd.li/i/13059834',
          ],
        },
      ],
    },
  ],
});
