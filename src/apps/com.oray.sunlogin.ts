import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: 0,
      name: '会员弹窗',
      desc: '点击右上角[关闭]',
      quickFind: true,
      activityIds: 'com.oray.sunlogin.dialog.ShareDialog',
      rules:
        '@[id="com.oray.sunlogin:id/close"] <2 RelativeLayout[childCount=2] < [id="android:id/content"][childCount=1]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12910411',
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/61d335f0-a85a-4e26-80fe-6bc0d1742bc0',
    },
  ],
});
