import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.administrator.searchpicturetool',
  name: '搜图神器',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '更新提示',
      desc: '点击取消',
      rules: [
        {
          matches: '@[text="取消"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13989147',
        },
      ],
    },
  ],
});
