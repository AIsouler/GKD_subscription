import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.quqi.quqioffice',
  name: '曲奇云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.quqi.quqioffice.pages.splashAd.SplashAdPage',
      rules: [
        {
          matches: 'TextView[text="4"||text="5"] - TextView[text$="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12854643',
        },
        {
          matches: 'View[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12854691',
        },
      ],
    },
    {
      key: 1,
      name: '私人云-看图-弹窗广告',
      desc: '在线私人云看图片自动弹出自动播放可跳过广告',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          matches:
            'LinearLayout > FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12854650',
            'https://gkd-kit.gitee.io/import/12854723',
          ],
        },
        {
          matches: 'TextView[text$="s"] + TextView[text$="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12877535'],
        },
        {
          matches:
            'TextView[text*="应用名称"] < LinearLayout -2n FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12854664',
        },
        {
          matches:
            'ImageView[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12877540',
        },
      ],
    },
  ],
});
