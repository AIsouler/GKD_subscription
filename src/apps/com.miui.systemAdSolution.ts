import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.miui.systemAdSolution',
  groups: [
    {
      key: 0,
      name: 'miui任意app开屏广告',
      rules: '[id=`com.miui.systemAdSolution:id/view_skip_button`]',
    },
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: '关闭这个提示',
      activityIds: 'com.xiaomi.ad.feedback',
      rules: '[id=`com.miui.systemAdSolution:id/no_interest`]',
    },
  ],
};
