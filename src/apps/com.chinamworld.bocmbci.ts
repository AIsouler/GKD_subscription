import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches: '@[desc="关闭"] > [vid="btn_action"]',
          exampleUrls: 'https://e.gkd.li/988dbaff-68b3-499a-8736-a6e5b3364ed9',
          snapshotUrls: 'https://i.gkd.li/i/17691747',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches:
            '@Image[clickable=true][childCount=0][visibleToUser=true][width<150 && height<150] <2 View[childCount=2] < View <4 View < View < WebView < WebView < [vid="webview_layout"]',
          exampleUrls: 'https://e.gkd.li/13b6fa95-5198-41f5-b39c-d40166a624fb',
          snapshotUrls: 'https://i.gkd.li/i/19567854',
        },
      ],
    },
  ],
});
