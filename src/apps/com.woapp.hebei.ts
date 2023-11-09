import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.woapp.hebei',
  name: '联通智家',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'net.smartont.we.wohome.ui.main.view.MainActivity',
      rules: '@[text="忽略更新"] + [text="立即更新"]',
      snapshotUrls: ['https://i.gkd.li/import/import/12707746'],
    },
  ],
});
