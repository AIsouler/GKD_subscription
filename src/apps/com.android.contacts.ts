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
            'https://m.gkd.li/57941037/39a38afb-dcf9-4dbc-b3f1-af522dd33544',
          snapshotUrls: 'https://i.gkd.li/import/14318769',
        },
      ],
    },
  ],
});
