import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.thestore.main.LoadingActivity',
      rules: [
        {
          matches: '[id="com.thestore.main:id/ll_skip"] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/import/13163668',
        },
      ],
    },
    {
      key: 1,
      enable: false,
      name: '促销广告',
      desc: '关闭促销弹窗，也许有用呢',
      activityIds: 'com.thestore.main.app.home.HomeActivity',
      rules: [
        {
          matches: '[id="com.thestore.main.home.feature:id/ad"] > TextView',
          //TextView有id类似".../j"担心这个id是随机的，所以用了TextView而不是id
          snapshotUrls: 'https://i.gkd.li/import/import/13163686',
        },
      ],
    },
  ],
});
