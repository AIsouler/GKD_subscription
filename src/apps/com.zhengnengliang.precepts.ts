import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      rules: '@[text="取消"] +2 [text="升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12715352',
    },
  ],
});
