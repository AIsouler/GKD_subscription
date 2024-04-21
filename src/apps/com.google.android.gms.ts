import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gms',
  name: 'Google Play 服务',
  groups: [
    {
      key: 1,
      name: '功能类-谷歌填充密码自动授权',
      desc: '勾选[不再显示]-点击[使用]',
      quickFind: true,
      activityIds: 'com.google.android.gms.autofill.ui.AutofillDialogActivity',
      rules: [
        {
          key: 0,
          matches: '[text="不再显示"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/26d02bb7-efb2-4b8c-b27a-32a878ac89b1',
          snapshotUrls: 'https://i.gkd.li/i/14479073',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="使用"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b05ef245-7e2e-4516-80e5-12832296ec8f',
          snapshotUrls: 'https://i.gkd.li/i/14479128',
        },
      ],
    },
  ],
});
