import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zbx.ct.tvzhibo',
  name: '手机电视高清直播',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@Image[text.length=0] < View -n [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13739951',
        },
        {
          key: 1,
          name: '腾讯SDK',
          activityIds: 'com.tvmain.mvp.view.activity.TvMainActivity',
          matches: '@ImageView < FrameLayout <n FrameLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/i/13766516',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-浮窗广告',
      desc: '会出现在更多页面、播放页面',
      quickFind: true,
      rules: [
        {
          activityIds: [
            'com.tvmain.mvp.view.activity.TvMainActivity',
            'com.tvmain.mvp.view.activity.LivePlayerActivity',
          ],
          matches: '[id="com.zbx.ct.tvzhibo:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13740079',
            'https://i.gkd.li/i/13740126',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-播放页面弹窗广告',
      rules: [
        {
          activityIds: 'com.tvmain.mvp.view.activity.VodPlayerActivity',
          matches:
            '@ImageView[text.length=null] < FrameLayout <n FrameLayout +n ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13739932',
        },
      ],
    },
  ],
});
