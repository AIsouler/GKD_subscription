import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.gushiwen.gushiwen',
  name: '古诗文网',
  groups: [
    {
      key: 1,
      name: '分段广告-弹窗广告',
      rules: [
        {
          actionDelay: 500,
          key: 0,
          activityIds: 'org.gushiwen.gushiwen.HomeActivity',
          matches:
            '@[width>1 && width<65] < FrameLayout - [name="android.widget.ImageView"||name="android.widget.FrameLayout"||name="android.widget.LinearLayout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12813618',
            'https://i.gkd.li/i/12903835',
            'https://i.gkd.li/i/12903885',
            'https://i.gkd.li/i/12876077',
            'https://i.gkd.li/i/13059294',
          ],
        },
        {
          actionDelay: 500,
          key: 1,
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches: '@Image < View[width<100] <n View > [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12837225',
            'https://i.gkd.li/i/12876086',
            'https://i.gkd.li/i/12876067',
            'https://i.gkd.li/i/12837225',
            'https://i.gkd.li/i/12912911',
            'https://i.gkd.li/i/13171930',
          ],
        },
        {
          actionDelay: 500,
          key: 2,
          activityIds: 'org.gushiwen.gushiwen.HomeActivity',
          matches:
            '@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^="摇动"]',
          snapshotUrls: ['https://i.gkd.li/i/13266879'],
        },
        {
          preKeys: [0, 1, 2],
          key: 10,
          name: '打赏页面-点击返回按钮',
          activityIds: [
            'local.z.androidshared.vip.RewardActivity',
            'local.z.androidshared.pay.RewardActivity',
          ],
          matches: '[id="org.gushiwen.gushiwen:id/btn_back"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12813638',
            'https://i.gkd.li/i/13111042',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 11,
          name: '荣誉会员-点击返回按钮',
          activityIds: [
            'local.z.androidshared.vip.member.VipActivity',
            'local.z.androidshared.pay.vip.VipActivity',
          ],
          matches: '[id="org.gushiwen.gushiwen:id/backBtn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12837229',
            'https://i.gkd.li/i/13111057',
          ],
        },
      ],
    },
  ],
});
