import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.samsung.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      enable: false,
      key: 1,
      name: '请求开启反恶意软件提示弹窗',
      activityIds: 'pl.solidexplorer.SolidExplorer',
      rules: [
        {
          key: 0,
          matches: ['[text^="是否打开反恶意软件"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/import/13233686',
        },
      ],
    },
  ],
});
