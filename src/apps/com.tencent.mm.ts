import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '关闭朋友圈广告',
      desc: '朋友圈信息流广告,点击关闭按钮,确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      ],
      rules: [
        'TextView[text*="广告"] + TextView[text="关闭该广告"]',
        'ImageView - TextView[text="广告"][id!=null][index=0]',
      ],
    },
    {
      key: 1,
      name: '电脑微信快捷自动登录',
      activityIds: '.plugin.webwx.ui.ExtDeviceWXLoginUI',
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
    },
    {
      key: 2,
      name: '浏览器扫码微信登录自动授权',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
    },
    {
      key: 3,
      name: '微信手机第三方APP申请使用',
      desc: '自动点击同意',
      rules: [
        'TextView + TextView[text="申请使用"]',
        'Button[text="拒绝"] - Button[text="允许"]',
      ],
    },
    {
      key: 4,
      name: '微信读书网页版扫码登录自动授权',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          matches: 'Button[text="登 录"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12506197',
        },
        {
          matches: [
            '[text="登录成功"]',
            '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://gkd-kit.songe.li/import/12506201',
        },
      ],
    },
  ],
});
