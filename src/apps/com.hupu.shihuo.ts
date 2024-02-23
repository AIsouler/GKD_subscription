import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 2,
      name: '通知提示-请求消息通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="通知分类"] +n ImageView[id="com.hupu.shihuo:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/i/13704887',
    },
    {
      key: 3,
      name: '全屏广告-广告弹窗',
      desc: '点击左上角x关闭',
      activityIds:
        'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
      rules:
        '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13115664',
    },
    {
      key: 4,
      name: '更新提示',
      desc: '点击"以后再说"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="发现新版本"] +2 ViewGroup > [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/14052208',
        },
      ],
    },
  ],
});
