import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xueqiu.fund',
  name: '雪球基金',
  groups: [
    {
      key: 1,
      name: '全屏广告-基金页面弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xueqiu.fund.commonlib.FundHomeActivityV2',
          matches: '[id="com.xueqiu.fund:id/image_cancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff',
          snapshotUrls: 'https://i.gkd.li/i/14163901',
        },
      ],
    },
  ],
});
