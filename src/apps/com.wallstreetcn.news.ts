import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
  groups: [
    {
      key: 0,
      name: '启动-开屏广告',
      activityIds: ['com.wallstreetcn.news.ProxyMainActivity'],
      rules: [
        {
          matches: '[id="com.wallstreetcn.news:id/iv_jump"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12850458',
        },
      ],
    },
    {
      key: 10,
      name: '卡片广告',
      desc: '点击关闭, 无后续确认操作',
      activityIds: ['com.wallstreetcn.news.ProxyMainActivity'],
      quickFind: true,
      rules: [
        {
          matches:
            '[text="广告"] + [id="com.wallstreetcn.news:id/close"][visibleToUser=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13262717',
        },
      ],
    },
  ],
});
