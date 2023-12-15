import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[clickable=true] > [text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13685134',
    },
    {
      key: 3,
      name: '广告弹窗',
      desc: '点击左上角x关闭',
      activityIds:
        'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
      rules:
        '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13115664',
    },
  ],
});
