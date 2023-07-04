import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.mm',
  groups: [
    {
      key: 0,
      name: '微信朋友圈广告',
      desc: '朋友圈信息流广告,点击关闭按钮,确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      rules: [
        'TextView[text*=`广告`] + TextView[text=`关闭该广告`]',
        'ImageView - TextView[text=`广告`][id!=null][index=0]',
      ],
    },
    {
      key: 1,
      name: '微信电脑快捷自动登录',
      activityIds: '.plugin.webwx.ui.ExtDeviceWXLoginUI',
      rules: 'TextView[text=`取消登录`] - Button[text=`登录`]',
    },
    {
      key: 2,
      name: '微信电脑第三方登录自动授权',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI'],
      rules: 'Button[text=`拒绝`] - Button[text=`允许`]',
    },
    {
      key: 3,
      name: '微信手机第三方app申请使用',
      desc: '自动点击同意',
      rules: [
        'TextView + TextView[text=`申请使用`]',
        'Button[text=`拒绝`] - Button[text=`允许`]',
      ],
    },
  ],
};
