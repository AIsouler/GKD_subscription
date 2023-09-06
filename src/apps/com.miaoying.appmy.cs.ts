import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miaoying.appmy.cs',
  name: '新小财神影视',
  groups: [
    {
      key: -1,
      name: '关闭公告栏',
      desc: 'APP启动时出现的公告栏',
      activityIds: [
        'com.miaoying.appmy.cs.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '@[desc="我知道了"] + [desc="了解更多"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12522872',
    },
  ],
});
