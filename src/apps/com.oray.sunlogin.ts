import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: 0,
      name: '瓜子会员弹窗',
      desc: '点击右上角[关闭]',
      quickFind: true,
      activityIds: 'com.oray.sunlogin.application.Main',
      rules: '[id="com.oray.sunlogin:id/close"][text="关闭"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13195950',
        'https://i.gkd.li/import/12910411',
        'https://gkd-kit.gitee.io/import/13197454', //如果没有text条件则会和这一条误触
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/61d335f0-a85a-4e26-80fe-6bc0d1742bc0',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      rules: [
        {
          matches:
            '[text="立即更新"] <2 * > [id="com.oray.sunlogin:id/button_cancel"][text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/import/13195560',
        },
      ],
    },
  ],
});
