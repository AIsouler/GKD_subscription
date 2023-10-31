import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.pdj',
  name: '京东到家',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'pdj.main.MainActivity',
      rules: 'WebView[text="京东到家"] >7 TextView[text=""]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13217796',
    },
    {
      key: 2,
      name: '更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.jingdong.pdj.plunginupdate.update.UpdateDialogActivity',
      rules: 'Button[text="暂不安装"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13217634',
    },
  ],
});
