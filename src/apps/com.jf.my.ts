import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jf.my',
  name: '蜜源',
  groups: [
    {
      key: 0,
      name: '版本升级弹窗',
      activityIds: ['com.lbe.security.ui.CountdownDialogActivity'],
      rules: [
        {
          matches:
            '[id="com.jf.my:id/btn_ok"][text="更新"] - [id="com.jf.my:id/btn_cancel"][text="关闭"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12838034',
        },
      ],
    },
  ],
});
