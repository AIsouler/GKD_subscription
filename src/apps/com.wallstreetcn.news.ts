import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
  groups: [
    {
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: ['com.wallstreetcn.news.ProxyMainActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[text="广告" || text="活动"] + [id="com.wallstreetcn.news:id/close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13262717',
        },
      ],
    },
  ],
});
