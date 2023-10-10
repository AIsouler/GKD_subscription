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
  ],
});
