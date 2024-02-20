import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text^="腾讯会议新版本"] +3 * > [text="下次安装"]',
      snapshotUrls: 'https://i.gkd.li/import/14332625',
    },
  ],
});
