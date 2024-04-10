import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.pdj',
  name: '京东到家',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      activityIds: 'pdj.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'WebView[text="京东到家"] >7 TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/i/13217796',
        },
        {
          key: 1,
          quickFind: true,
          matches: '[id="com.jingdong.pdj:id/ivClose"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13223282',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'Button[text="暂不安装"]',
      snapshotUrls: 'https://i.gkd.li/i/13217634',
    },
  ],
});
