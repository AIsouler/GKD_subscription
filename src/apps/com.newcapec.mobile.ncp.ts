import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.newcapec.mobile.ncp',
  name: '完美校园',
  groups: [
    {
      key: 10,
      name: '新版本提示',
      desc: '新版本提示弹窗，点击右上角【X】按钮。（需手动开启）',
      enable: false,
      activityIds: 'com.wanxiao.basebusiness.activity.SplashActivity',
      rules: '[id="com.newcapec.mobile.ncp:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12843377',
    },
    {
      key: 11,
      name: '密码过期提示弹窗',
      desc: '密码过期提示弹窗，点击【取消】按钮。（需手动开启）',
      enable: false,
      activityIds: 'com.wanxiao.ui.activity.IndexActivity',
      rules: '[id="com.newcapec.mobile.ncp:id/dialog_oppotion"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12843399',
    },
  ],
});
