import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.mobile.businesshall.ui.common.RecommendPopupActivity',
          matches: '[vid="img_close_btn"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4',
          snapshotUrls: 'https://i.gkd.li/i/14321032',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击[取消]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="取消"] +2 [text="更新"]',
          exampleUrls:
            'https://m.gkd.li/57941037/803695f8-48e1-43e8-8841-ec0288393489',
          snapshotUrls: 'https://i.gkd.li/i/14469082',
        },
      ],
    },
  ],
});
