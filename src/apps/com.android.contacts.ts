import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
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
          snapshotUrls: 'https://i.gkd.li/import/14321032',
        },
      ],
    },
  ],
});
