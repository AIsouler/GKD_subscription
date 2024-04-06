import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.growing.topwidgets',
  name: '万能小组件 Top Widgets',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.growing.topwidgets.home.MainActivity',
          matches: '@ImageView < * - * > [text="立即打开"]',
          exampleUrls:
            'https://m.gkd.li/57941037/90c3b791-0aec-4c48-b417-de4604cdcff2',
          snapshotUrls: 'https://i.gkd.li/i/14892835',
        },
      ],
    },
  ],
});
