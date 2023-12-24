import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      activityIds: [
        'com.yitong.mbank.psbc.module.app.view.customview.dialog.DialogUpdateApk',
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      ],
      rules: [
        {
          matches: 'Button[id="com.yitong.mbank.psbc:id/bt_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12685350',
            'https://i.gkd.li/import/13695462',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules:
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12755516',
    },
  ],
});
