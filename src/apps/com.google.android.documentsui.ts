import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.documentsui',
  name: 'Android 系统文件选择器',
  groups: [
    {
      enable: false,
      key: 10,
      name: '功能类-授权第三方应用访问文件夹',
      desc: '自动点击【使用此文件夹】->【允许】',
      activityIds: 'com.android.documentsui.picker.PickActivity',
      rules: [
        {
          key: 0,
          matches: '[text="使用此文件夹"]',
          snapshotUrls: 'https://i.gkd.li/import/12799610',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="取消"] + [text="允许"]',
          snapshotUrls: 'https://i.gkd.li/import/12799603',
        },
      ],
    },
  ],
});
