import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.quark.browser',
  groups: [
    {
      key: 0,
      name: '夸克浏览器-小说阅读页面底部广告',
      activityIds: 'com.ucpro.BrowserActivity',
      rules: [
        '[id=`com.quark.browser:id/tv_close_ad`][text=`关闭广告`]',
        '[id=`com.quark.browser:id/ad_close_layout_container`]',
      ],
    },
  ],
};
