import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      enable: false,
      key: 0,
      name: '首页-开启通知权限请求',
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      rules: 'TextView[text="开启设置"] - TextView[text="取消"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867401',
    },
  ],
});
