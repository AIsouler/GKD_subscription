import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id$="id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13533782',
    },
    {
      key: 2,
      name: 'VIP弹窗',
      desc: '直接关闭所有底部半屏弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.luna.biz.main.main.MainActivity',
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.luna.music:id/design_bottom_sheet"] [id="com.luna.music:id/bullet_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13533795',
            'https://i.gkd.li/import/13533797',
            'https://i.gkd.li/import/13613296', // matches中添加[id="com.luna.music:id/design_bottom_sheet"], 避免在此误触
            'https://i.gkd.li/import/13613498', // matches中添加[id="com.luna.music:id/design_bottom_sheet"], 避免在此误触
            'https://i.gkd.li/import/13613850', // 单独matches: '[id="com.luna.music:id/design_bottom_sheet"]', 会误触
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '看广告视频拿VIP',
      desc: '30s广告后点击【跳过】',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '等待30s点击【跳过】',
          actionDelay: 30000,
          matches: 'WebView > WebView > View TextView[text="| 跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13611006',
            'https://i.gkd.li/import/13613085',
          ],
        },
        {
          preKeys: 0,
          name: '点击【坚持退出】',
          quickFind: true,
          matches: '[id="com.byted.pangle:id/tt_negtive"][text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/import/13613184',
        },
      ],
    },
  ],
});
