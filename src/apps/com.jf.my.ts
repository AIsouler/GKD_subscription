import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 0,
      name: '版本升级弹窗',
      activityIds: [
        'com.lbe.security.ui.CountdownDialogActivity',
        'com.jf.my.MainActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.jf.my:id/btn_ok"][text="更新"] - [id="com.jf.my:id/btn_cancel"][text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/import/12838034',
            'https://i.gkd.li/import/import/12840591',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '首页-广告弹窗',
      activityIds: 'com.jf.my.main.ui.dialog.HomeRedPackageDialog',
      rules: '[id="com.jf.my:id/iv_back"]',
      snapshotUrls: 'https://i.gkd.li/import/import/12840619',
    },
  ],
});
