import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.systemAdSolution',
  name: `miui系统广告`,
  groups: [
    {
      key: 0,
      name: '任意app开屏广告',
      rules: '[id=`com.miui.systemAdSolution:id/view_skip_button`]',
    },
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: `关闭这个提示,使用ADB禁用广告组件时,点击此按钮无反应`,
      activityIds: 'com.xiaomi.ad.feedback',
      rules: '[id=`com.miui.systemAdSolution:id/no_interest`]',
    },
  ],
});
