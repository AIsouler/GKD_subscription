import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.samsung.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 2,
      name: '功能类-跳过安全使用协议',
      desc: '自动点击略过并关闭反恶意软件协议',
      rules: [
        {
          key: 1,
          matches: '[text *="略过"]',
          snapshotUrls: 'https://i.gkd.li/i/13255641',
        },
        {
          key: 0,
          matches: ['[text^="是否打开反恶意软件"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13233686',
        },
        {
          key: 2,
          matches: ['[text^="打开应用程序保护?"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13650528',
        },
      ],
    },
  ],
});
