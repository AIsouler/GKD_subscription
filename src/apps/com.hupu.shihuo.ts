import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.shizhi.shihuoapp.module.main.ui.welcome.WelcomeActivity',
      rules: '[id=`com.hupu.shihuo:id/fl_countdown`]',
    },
    {
      key: 3,
      name: '广告弹窗',
      desc: '点击左上角x关闭',
      activityIds:
        'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
      rules:
        '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/import/13115664',
    },
  ],
});
