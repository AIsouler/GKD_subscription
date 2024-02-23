import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13228520',
    },
    {
      key: 2,
      name: '青少年模式',
      desc: '点击"知道了"',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: 'ScrollView >2 [text="知道了"]',
          exampleUrls:
            'https://m.gkd.li/57941037/461e8848-e8ed-4daf-b5f4-4b1aaa72e9a8',
          snapshotUrls: 'https://i.gkd.li/i/14219285',
        },
      ],
    },
  ],
});
